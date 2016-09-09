function FilledBookPage (){}


FilledBookPage.prototype.fillTitle = function(title){
    element(by.name('newTitle')).sendKeys(title);
};

FilledBookPage.prototype.fillAuthor = function(author){
    element(by.name('newAuthor')).sendKeys(author);
};

FilledBookPage.prototype.chooseDate = function(buttonId){
    element(by.className('glyphicon glyphicon-calendar')).click();
    element(by.id(buttonId)).click();
};

FilledBookPage.prototype.clickOkBook = function(){
    element(by.name('ok')).click();
};


module.exports = FilledBookPage;
