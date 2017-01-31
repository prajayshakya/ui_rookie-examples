var add = function(){
    var x;
    var y;
    
    this.setx = function(val)
    {
        x = val;
    }
    
    this.sety = function(val)
    {
        y = val;
    }
    
    this.getx = function()
    {
        return x;
    }
    
    this.gety = function()
    {
        return y;
    }
    
    this.addition = function()
    {
        return x+y;
    }
}

console.log('Hello world');

add.prototype.multi = function()
{
    return this.getx()*this.gety();
}

var test = new add();
test.setx(10);
test.sety(15);
console.log(test.multi());
console.log(test.addition());

var obj1 = new add();
obj1.setx(5);
obj1.sety(10);

console.log(obj1.getx()); // displays undefined because x is not intialized in object

obj1.sub = function()
{
    return obj1.gety()-obj1.getx();
}

console.log(obj1.sub());

