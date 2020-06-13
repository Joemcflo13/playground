// credit for icon: https://semantic-ui.com/elements/icon.html, i wouldn't have it without it.
//% color="#ff0000" icon="\uf2bd"
namespace Playground {
    /**
     * this block is for scrambeling letters.
     */
    //%block="what is a letter for the word? $arg"
    //%blockId=scrambler
    //% enumName="Letters"
    //% enumMemberName="letter"
    //% enumPromptHint="A, B, C ..."
    //% enumInitialMembers="A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
    export function scrambler(arg: string)  {
        let letter = arg;
        return arg;
    }
    
    /**
     * this block is what you use to make words with the scrambler.
     */
    //%block="show randomized string: $message | $message2 | $message3"
    //%blockId=randomscrambler
    export function randomizer(message: string, message2: string, message3: string,)  {
        basic.showString("message, message2, message3,")
    }

}