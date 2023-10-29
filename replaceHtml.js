module.exports=function(template, product){
    let output=template.replace("%id%", product.id);
    output=output.replace("%name%", product.name);
    output=output.replace("%age%", product.age);
    output=output.replace("%dob%", product.DOB);
    output=output.replace("%occupation%", product.occupation);
    output=output.replace("%id%", product.id);
    output=output.replace("%src%", product.src)

    return output;
}