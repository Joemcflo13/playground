// credit for icon: https://semantic-ui.com/elements/icon.html, i wouldn't have it without it.
//% color="#63b4ff" icon="\uf286"
namespace Playground {
    /**
     * this block is for scrambeling letters.
     */
    //%block="what is a letter for the word? || $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter | $Letter |"
    //%blockId=letter
    //% enumName="Letters"
    //% enumMemberName="letter"
    //% enumPromptHint="A, B, C ..."
    //% enumInitialMembers="A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
    export function letter(Letter: string)  {
        let letter = Letter;
        return letter;
    }
    
    /**
     * this block is what you use to make words with the scrambler.
     */
    //%block="show randomized string with:|| $message | $message2 | $message3 | $message3 | $message3 | $message3 | $message3 | $message3 | $message3 | $message3 | $message3 | $message3 | $message3 | $message3 |"
    //%blockId=randomscrambler
    export function randomizer(message: string, message2: string, message3: string,)  {
        let message = message;
        let message2 = message2;
        let message3 = message3;
        
        return word
    }

}