/*Window Object- It represents an open window in a browser .It is browser's object and  automatically
created by browser
It is global object with lots of properties and object like console.log, alert,prompt etc all are its prop.*/
console.log(window);

/*Window -> Document -> Html -> i)Head -> meta , title , link etc
                             ii)body   ->  heading , title, paragraph , etc  
DOM - When a web page is loaded ,the browser creates a 'Document Object model' of page
Window ke andr sara property jo h wo user ko dynamic change me help krta h */
console.dir(document.body.childNodes)
/*If we want to edit/access html by js then we use Dom manipulation*/
document.getElementById             //esse hm id ko access krte h
document.getElementsByClassName    //esse hm class ko access krte h
document.getElementsByTagName      //esse hm tag ke through  access krte h
document.querySelector(/*esme id/tag/parajo likhna h wo likh do,only for first element*/)
document.querySelectorAll(/*esme id/tag/parajo likhna h wo likh do,sara element ke liye valid h*/)