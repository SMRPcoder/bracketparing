
var input1:string="{[][]() []";//}[()[]{
// }[()[]{]
var input2:string="}[()[]";
var input3:string="}}}[[[(((";

function get_pair(bracket:string):string{
    switch (bracket) {
        case '(':
            return '(';
        case '[':
            return ']';
        case '{':
            return '}';
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';
        default:
            return '';
    }
}

function removeBalancedPairs(input: string): string {
    const output_arr: string[] = [];
    const matchingBrackets: Record<string, string> = { '}': '{', ']': '[', ')': '(' };
    let output: string = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === '(' || char === '[' || char === '{') {
            output_arr.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (output_arr.length > 0 && output_arr[output_arr.length - 1] === matchingBrackets[char]) {
                output_arr.pop();
            } else {
                output += char;
            }
        } else {
            output += char;
        }
    }
    output += output_arr.join('');
    return output;
}

function HandletheBrackets(bracketStrings:string){
    if (/[^()\[\]{}]/.test(bracketStrings)) {
        console.log("INVALID INPUTS");
        return;
    }
    var output=removeBalancedPairs(bracketStrings);
    var outputarr=output.split("").map((val)=>get_pair(val));
    console.log(bracketStrings+outputarr.join(""));
}

HandletheBrackets(input1);
HandletheBrackets(input2);
HandletheBrackets(input3);


