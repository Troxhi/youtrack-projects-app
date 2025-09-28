exports.httpHandler = {
  endpoints: [
    {
      scope: "global",
      method: "POST",
      path: "projectListToggle",
      handle: function handle(ctx) {
        ctx.globalStorage.extensionProperties.projectListToggle = !(ctx.globalStorage.extensionProperties.projectListToggle ?? false);
        ctx.response.json({success: true});
      }
    },
    {
      scope: "global",
      method: "GET",
      path: "projectListToggle",
      handle: function handle(ctx) {
        const value = ctx.globalStorage.extensionProperties.projectListToggle ?? false;
        ctx.response.json({projectListToggle: value});
      }
    }
  ]
};
