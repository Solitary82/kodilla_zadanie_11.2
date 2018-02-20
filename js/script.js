function Button(text){
    this.text = text || 'Hello';
}

Button.prototype = {
    
    create: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        });
        $('body').append(this.$element);
    }
}

var btn1 = new Button('Hello!');
btn1.create();

$('button').css('padding-left', '40px').css('padding-right', '40px').css('padding-top', '20px').css('padding-bottom', '20px').css('background-color', 'white').css('font-weight', 'bold');