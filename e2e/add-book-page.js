function AddBookPage (){}

AddBookPage.prototype.open = function(url){
    browser.get(url);
};

AddBookPage.prototype.chooseDialog = function(){
    element(by.xpath("//a[@href='#/component-1/dialog-a']")).click();
};

AddBookPage.prototype.clickAddBook = function(){
    element(by.buttonText('add book')).click();
};


module.exports = AddBookPage;
