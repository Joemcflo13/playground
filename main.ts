// icon source: https://semantic-ui.com/elements/icon.html, thanks to them!
//% color="#ff0000" icon="\uf3ed"
//% groups="['Language']"
namespace Playground {
    /**
     * use this block mulitiple times to get the full results.
     */
    //%group="Language"
    //%block="what letters will you use? $arg" blockId=Scrambler
    //% enumName="Letters"
    //% enumMemberName="letters"
    //% enumPromptHint="A, B, C ..."
    //% enumInitialMembers="Red, Blue, Yellow"
    export function scrambler(arg: string)  {
        let letter = arg;
        return arg;
    }
}