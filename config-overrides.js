const {override,fixBabelImports,addWebpackAlias}=require("customize-cra")
const path=require("path");
module.exports=override(
    fixBabelImports('import',{
        libraryName:'antd-mobile',
        style:'css',
    }),
    addWebpackAlias({
        "@":path.join(__dirname,"./src"),
        "api":path.join(__dirname,"./src/api"),

        "common":path.join(__dirname,"./src/common"),
        "components":path.join(__dirname,"./src/components"),
        "router":path.join(__dirname,"./src/router"),
        "static":path.join(__dirname,"./src/static"),
        "layout":path.join(__dirname,"./src/layout"),
        "store":path.join(__dirname,"./src/store"),
        "utils":path.join(__dirname,"./src/utils"),
        "pages":path.join(__dirname,"./src/pages"),
        "actions":path.join(__dirname,"./src/actions"),


    })

)