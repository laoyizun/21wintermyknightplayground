//%icon="\uf152" color="#BCB0E0"
//%blockNamespace="迷宫"
namespace playground_helpers {

    export function randomshoot(sprite: Sprite, n: number, amn: number, offset: number, delay: number, projectile: string, smn: number, k: number, amx: number, smx: number, d: number) {
        if (k > 0) {
            for (let index = 0; index <= n; index++) {
                Bullet.shoot(sprite, projectile, sprite.x, sprite.y, randint(amn, amx) + index * offset, randint(smn, smx), d)
            }
            Helper.after(delay, function () {
                randomshoot(sprite, n, amn + offset, offset, delay, projectile, smn, k - 1, amx, smx, d)
            })
        }
    }

    export function multishoot(sprite: Sprite, n: number, a: number, offset: number, delay: number, projectile: string, s: number, k: number, sadd1: number, sadd2: number) {
        if (k > 0) {
            for (let index2 = 0; index2 <= n; index2++) {
                Bullet.shoot(sprite, projectile, sprite.x, sprite.y, a + index2 * (360 / n), s + index2 * sadd1)
            }
            Helper.after(delay, function () {
                multishoot(sprite, n, a + offset, offset, delay, projectile, s + sadd2, k - 1, sadd1, sadd2)
            })
        }
    }

    export function randomWeapon(): string {
        let registeredWeapons = Object.keys(IntegrateGame.defExtSprite[Helper.extSpriteKind.Weapon])

        for (let k of registeredWeapons) {
            console.log(k)
        }

        return registeredWeapons[randint(0, registeredWeapons.length - 1)]
    }

    export function getAllCharacters(): string[] {
        let characters = Object.keys(IntegrateGame.defExtSprite[Helper.extSpriteKind.Player])
        return characters
    }

    function gamestart(character: string) {
        Player.createPlayer(character, 2, 2)
        Maze.newRandomMaze()
    }
    function gamestart2(character: string, maze: Maze.maze) {
        Player.createPlayer(character, 2, 2)
        Maze.newRandomMaze()
    }
    //%block="开始游戏"
    export function startPlayground() {
        blockMenu.onMenuOptionSelected(function (option, index) {
                blockMenu.setControlsEnabled(false)
                blockMenu.closeMenu()
                gamestart(option) 
        })
        blockMenu.setControlsEnabled(false)
        pause(10)
        blockMenu.showMenu(playground_helpers.getAllCharacters(), MenuStyle.Grid, MenuLocation.FullScreen)
        blockMenu.setControlsEnabled(true)

    }
}