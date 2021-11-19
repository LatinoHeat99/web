
var dicDayNight = {};
dicDayNight['day'] = { backgroundColor : 'black', 
                        color : 'white', 
                        acolor : 'powderblue'};
dicDayNight['night'] = { backgroundColor : 'white', 
                        color : 'black', 
                        acolor : 'blue'};

function setBodyColor(_mode)
{
    // var _body = document.querySelector('body');
    // _body.style.backgroundColor = _mode.backgroundColor;
    // _body.style.color = _mode.color;
    $('body').css('backgroundColor', _mode.backgroundColor);
    $('body').css('color', _mode.color);
}

function acolorhandler(color)
{
    // var alist = document.querySelectorAll('a');
    // for(var i = 0; i < alist.length; i++)
    //     alist[i].style.color = color;
    $('a').css('color', color);
}

function nightdayhandler(self)
{
    if(self.value === 'night') {
    self.value = 'day';
    setBodyColor(dicDayNight[self.value]);
    acolorhandler(dicDayNight[self.value].acolor);
    } else {
    self.value = 'night';
    setBodyColor(dicDayNight[self.value]);
    acolorhandler(dicDayNight[self.value].acolor);
    }
}


