var SampleArray = ['cat', 'dog', 'monkey'];

console.log(SampleArray[1]);
SampleArray[3] = 'donkey';

console.log(SampleArray);

console.log("Length of arrays"+ findlength(SampleArray));
SampleArray.push('chimp');

for(var i=0; i<SampleArray.length; i++)
    {
        document.write(i + " ) " + SampleArray[i] + "<br>");
    }