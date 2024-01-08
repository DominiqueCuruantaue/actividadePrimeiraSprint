# Actividade PrimeiraSprint

<h2>Discricao do projecto</h1>
um programa que permite ao usuario inserir um número com 4 dígitos no minimo, se o usuario inserir um numeros com menos de quatro digitos ou caracteres o programa retorna uma mensagem que diz ao usuario que o numero inserido e menor, tente inserir um numero maior. No caso do usuario inserir numeros com  mistura de caracteres ou letras, o programa retorna uma mensagem pedindo que o usuario retorne um numero valido e se o usuario inserir um numero de quatro ou mais digitaos o programa retorna uma mensagem de parabens avizando que o numero inserido é valido.

1. Sempre que o usuario inserir um numero valido a mensagem de saida confirma ao usuario com uma cor verde;
2. Caso contrario a mesagem de saida retornada será de cor vermelha que implica que o usuario não commprio com as condiçoes do programa.

<h2>Como funciona</h2>
<p>
1. O codigo comessa com uma função com o nome "identificarNumeroInserido", este funcao recebe dentro dela as segunintes intrucoes: a declaração de duas variaveis "inputNumero" que recebe um elemeto para obter um valor no conteudo html co atributo classe usando a classe da entrada do input tipo texto, a segunda variavel "resultadoElement" que recebe um elemento identico à variavel inputNumero, mas recebendo a classe que ira identificar as mensagens de saida saidas, "resultado";
</p>
<p>
2. Segue-se uma estrutura de condição if else com um operador booleano &&: se o usuario inserir um numero maior ou igual ao comprimento de quantro digitos e este numero nao for um nao um numero (NaN), o programa retorna no conteudo DOM ou arquivo html com a mensaguem parabéns o número inserido  é valido com uma cor verde.
</p>
<p>
3. Segue-se uma instrução else que contem uma sub instrução onde: senão obedecer a primeira condição o usuário inserir menos de quatro numeros ou cracteres o conteudo hmtl retornara uma mensagem avisando para que o proximo numero seja maior que o anterior.
Depois temos um senão que retorna uma mensagem que diz que o numero nao é válido o usuario deve inserir um numero valido com pelo menos 4 digitos, esta instrução so ira retornar se o usuario nigitar não um numero(NaN) com quatro ou mais numeros;
</p>
<h2>Diculdades</h2>
<p>
A primeira dificuldade que enfrentei foi em como carregar as classes para passas as variaveis no javascript. tive dificuldades em como combinar as classes do hmtl no js. Durante a aula do curso de js pude ver um elemento mais facil e simples que localiza elementos no arquvo html, me refiro da instrucao "document.querySelector('')" no inicio tentei usar o "document.getElementById()" e nunca me retornou uma saida no conteudo html, ao longo das pesquisas fui percebendo que o argumento document.grtElementById identifica apenas id no conteudo html,  tentei usar novamente este elemento com classeName e mesmo assim nao retornou uma saida. Depois te tanto tempo me recordei do document.querySelector e deu tudo certo.

A estrutura de condição condicao tambem deu um pouco de trabalho mas não foi algo que nao resolvesse, quanto mais resolvia um passo eu conseguia ter a visão do passo a seguir.
outra coisa que tambem foi dificil é intender como eu faria para que o usuario quando inserisse algo que nao seja um numero retornasse a condição nao valida.
</p>
