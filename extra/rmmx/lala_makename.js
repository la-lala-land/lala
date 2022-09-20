//=============================================================================
// Lala MakeName
// By NeTT (https://github.com/la-lala-land/lala)
// Date: 19-09-2022
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Generate random names.
 * @author NeTT
 *
 * @help lala_makename.js
 *
 * Generate random text.
 *
 * Usage:
 *   1. Use the plugin command "Generate random name".
 *   2. Supply the length of the name in "Length" and the ID of the actor in "Actor ID".
 *   3. The actor's name would be changed to a randomly generated name.
 *   4. The other two commands function the same way.
 *
 * @command makeName
 * @text Generate random name
 * @desc Sets the character's name to a randomly generated name.
 *
 * @arg len
 * @type number
 * @text Length
 * @desc Length of the name.
 * 
 * @arg actor
 * @type actor
 * @text Actor
 * @desc The actor to set name to.
 * 
 * @command makeNickname
 * @text Generate random title
 * @desc Sets the character's nickname to a randomly generated funny title.
 *
 * @arg actor
 * @type actor
 * @text Actor
 * @desc The actor to set name to.
 * 
 * @command makeEnemyName
 * @text Generate random fantasy name
 * @desc Sets the enemy's name to a random fantasy-like name.
 *
 * @arg actor
 * @type actor
 * @text Actor
 * @desc The actor to set name to.
 */

(async () => {
    const pluginName = "Lala";
    const Lala = await import("https://deno.land/x/lala@v3.1.4/lala.js");

    PluginManager.registerCommand(pluginName, "makeName", args => {
        console.log(args)
        const name = Lala.generateName(args.len)
        $gameActors.actor(args.actor).setName(Lala.capitalize(name, true))
    });
    PluginManager.registerCommand(pluginName, "makeMonsterLikeName", args => {
        const name = Lala.generateFantasyName()
        $gameActors.actor(args.actor).setName(Lala.capitalize(name, true))
    });
    PluginManager.registerCommand(pluginName, "makeNickname", args => {
        const name = Lala.generateCharacter()
        $gameActors.actor(args.actor).setNickname(Lala.capitalize(name, true))
    });
})();
