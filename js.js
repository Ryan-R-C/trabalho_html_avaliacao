
/*
English:
    There is 3 different ways to declare a variable in JavaScript: 
        let:
            Most common and modern way to declare a variable that can suffer changes  
        const: 
            Used when a variable has a fixed value, it has some benefits, such as use less memory than let
        var:
            Not recommended way to declare a variable, it suffers hoisting, its declaration is moved to the top of its scope, beeing possible to use the variable before its declaration, what does not happen in let and const.

Português: 
    Há três diferentes formas de declarar uma variável em JavaScript: 
        let:
            A forma mais comum e moderna de variáveis que podem sofrer mudanças
        const: 
            Usado quando a variável tem seu valor fixo, possui algumas vantagens como de usar menos memória que let 
        var:
            Forma não recomendada de declarar uma variável, ela sofre hoisting, sua declaração é movida para o topo da função, sendo possível usar a variável antes da sua declaração, o que não acontece com let e const
*/
let nomePessoa;
nomePessoa = "Pedro"

/*
    English:
        possible ways to declare a strings, none of then has a notable difference, just its sintax, in this case
    Português: 
        Formas possíveis de declarar strings, nenhuma possui diferença notável, apenas sua sintaxe, neste caso

    nomePessoa = "Pedro"
    nomePessoa = 'Pedro'
    nomePessoa = `Pedro`
*/

