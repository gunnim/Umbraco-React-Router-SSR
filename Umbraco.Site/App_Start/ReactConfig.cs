using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;
using System.Configuration;
using System.Web.Configuration;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(Umbraco.Site.ReactConfig), "Configure")]

namespace Umbraco.Site
{
    public static class ReactConfig
    {
        public static void Configure()
        {
            JsEngineSwitcher.Instance.DefaultEngineName = V8JsEngine.EngineName;

            // If you want to use server-side rendering of React components, 
            // add all the necessary JavaScript files here. This includes 
            // your components as well as all of their dependencies.
            // See http://reactjs.net/ for more information. Example:
            //ReactSiteConfiguration.Configuration
            //	.AddScript("~/Scripts/First.jsx")
            //	.AddScript("~/Scripts/Second.jsx");

            // If you use an external build too (for example, Babel, Webpack,
            // Browserify or Gulp), you can improve performance by disabling 
            // ReactJS.NET's version of Babel and loading the pre-transpiled 
            // scripts. Example:
            //ReactSiteConfiguration.Configuration
            //	.SetLoadBabel(false)
            //	.AddScriptWithoutTransform("~/Scripts/bundle.server.js")

            CompilationSection compilationSection =
                (CompilationSection)ConfigurationManager.GetSection(@"system.web/compilation");

            if (compilationSection.Debug)
            {
                ReactSiteConfiguration.Configuration
                                      .SetLoadBabel(true)
                                      .SetReuseJavaScriptEngines(false)
                                      //.DisableServerSideRendering()
                                      .SetUseDebugReact(true)
                                      .AddScriptWithoutTransform("~/scripts/server.js");
            }
            else
            {
                ReactSiteConfiguration.Configuration
                                      .SetLoadBabel(true)
                                      .AddScriptWithoutTransform("~/scripts/server.min.js");
            }
        }
    }
}
