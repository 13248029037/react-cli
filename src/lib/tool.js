function className(obj={}){
    let classnames = '';
    for(var i in obj){
        if(obj[i])
        classnames=obj[i]+' ';
    }
    return ;
}

export default {
    className
}