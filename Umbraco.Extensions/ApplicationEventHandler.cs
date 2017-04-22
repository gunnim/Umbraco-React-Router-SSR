using Umbraco.Core;
using Umbraco.Web.Routing;

namespace Umbraco.Extensions
{
    public class UmbEvents : ApplicationEventHandler
    {
        protected override void ApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            // Ensure our custom content finder is inserted
            ContentFinderResolver.Current.InsertType<ContentFinder>();
        }
    }
}