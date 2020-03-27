const peca = 'RainhA';

switch (peca.toLowerCase())
{
    case 'peão':
        console.log("Os peões se movem somente para frente. Um exceção é a primeira vez que um peão é movido, ele pode se mover duas casas.");
        break;
    case 'bispo':
        console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.");
        break;
    case 'torre':
        console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
        break;
    case 'cavalo':
        console.log("O movimento do cavalo forma é um “L”, move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto, é a única peça do tabuleiro que pode pular sobre outras peças.");
        break;  
    case 'rainha':
        console.log("A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");    
        break;
    case 'rei':
        console.log("O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.");
        break;
    default:
        console.log("Essa peça não existe!");    
}
    
