// 在此处添加您的代码
Enemy.setEnemy(img`
    .....55555.55.55555.....
    .....55555.55.55555.....
    .....55555f55f55555.....
    .....55555f55f55555....b
    .....55555555555555...bb
    ......ffff6fffffff...bbb
    ......fff666ffffff..bbbb
    ......fff6666fffff.bbbbb
    ......f6e666666e6f.bbb9b
    ......f6622662266f..b99b
    ......fe66666666ef..b99b
    .......2e66bb66e2...bbbb
    .......2fe6666ef2..bb..b
    ......e6fb1111bf6eb9b...
    ......6df111111fd6bb....
    ......66f666666f6bb.....
    .......22ffffff2b9b.....
    .......2.ff..ff.bb......
    ......22.......bb2......
    ....222.......b9b22.....
    ...22.........bb..222...
    ...2.........bb....22...
    ...........bbb..........
    .............b..........
    `, "火法师", function (enemy) {
    Enemy.setEnemyAbility(enemy, Enemy.aKind.hp, 500)
    Enemy.setEnemyAbility(enemy, Enemy.aKind.speed, 100)
    Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
        Bullet.shoot(sprite, "魔法印", Player.getPlayer().x, Player.getPlayer().y, 0, 0, 0, false)
        Helper.after(0.5, function () {
            Bullet.shoot(sprite, "魔法印", Player.getPlayer().x, Player.getPlayer().y, 0, 0, 0, false)
        })
    })
    Enemy.addSKill(enemy, Enemy.sKind.spoils, function (tempVar, sprite) {
        game.over(true, effects.confetti)
    })
})
//------------------------//
Maze.setMaze(tilemap`dz_级别1`, "神秘地图", function () {
    Maze.setMazeInfo("大尊", "努力活下去")
    Maze.bornPlaceCR(5, 5)
    Maze.setMazeMonsters(function () {
        Maze.setMonstersMembers("dzboss队", 5, 1)
    })
    
    //
    Maze.nextMazeOfPortal(Maze.mazeKind.random)
    Maze.nextPortal2(sprites.dungeon.darkGroundCenter)
})
//------------------------//
Enemy.setMonsters0(function () {
    Enemy.setMonsters("dzboss队", function (monster) {
        Enemy.setMonstersV2(monster, Enemy.msKind2.boss, true)
        Enemy.addMember(monster, "火法师")
        Enemy.setActionM(monster, 0, function (enemy) {
            Enemy.skillAtk(enemy, 0)
        })
        Enemy.setActionM(monster, 0, function (enemy) {
            tiles.placeOnTile(enemy, tiles.getTileLocation(randint(2, 8), randint(2, 6)))
            Enemy.stopMove(enemy)
        })
        Enemy.setActionM(monster, 3, function (enemy) {
            Enemy.jmp(monster, enemy, 0)
        })
    })
})

//------------------------//
Bullet.bulletOverlap("地火", Bullet.overlapKind.two, function (projectile, otherSprite) {
    Bullet.setHp(otherSprite, -1)
})

//------------------------//
Bullet.setProjectiles("21winter", function() {
    Bullet.setProjectile(img`
        ................................
        ................................
        ................................
        ..........22222222222...........
        ........22...........22.........
        .......2.......2.......2........
        ......2.......222.......2.......
        .....2........2.2........2......
        ....2........2..2.........2.....
        ...2........2...2..........2....
        ...2........2...2..........2....
        ..2.222222222...2.......22222...
        ..2........2.22222222222222.2...
        ..2.22.....2....2.....22....2...
        ..2..22...2......2..222.....2...
        ..2...2..2.......2.22.......2...
        ..2....2.2.......222........2...
        ..2.....2........22.........2...
        ..2.....22......2.2.........2...
        ..2.....2.2...22..22........2...
        ..2....2..2..2.....2........2...
        ..2....2...22......2........2...
        ...2...2...2.2......2......2....
        ...2..2..22...2.....2......2....
        ....2.222......2....22....2.....
        .....222........2....22..2......
        ......2..........22...2.2.......
        .......2..........2....2........
        ........22.........2.22.........
        ..........22222222222...........
        ................................
        ................................
        `, "魔法印", function (projectile) {
        Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
        Bullet.setBullet(projectile, Bullet.bulletP.perishTogether, 1000)
        Helper.after(1, function () {
            Bullet.shoot(projectile, "地火", projectile.x, projectile.y, 0, 0, 0, false)
            projectile.destroy()
        })
    })
    Bullet.setProjectile(img`
        . . . . 2 2 . . . 2 . . 2 . . . 
        . 2 2 . . 2 2 . . 2 2 . . 2 . . 
        . . 2 . 2 2 4 4 4 2 2 . . 2 2 . 
        . . 2 2 2 4 5 5 2 2 4 4 4 2 2 . 
        . 2 4 d 5 2 5 5 2 d d d 2 2 . . 
        . 2 4 5 2 2 1 2 2 d 5 5 2 4 . . 
        . 2 2 2 2 1 1 1 2 2 1 5 2 4 4 . 
        . 4 2 2 1 1 5 5 2 2 1 5 2 2 4 . 
        . 2 2 5 1 1 5 2 2 5 5 d 2 2 4 . 
        . 2 2 5 5 2 1 1 1 5 2 1 2 2 2 . 
        . 2 d 5 5 d 2 1 1 5 2 1 5 5 2 . 
        . . 2 4 d 2 2 5 5 2 2 d 5 4 . . 
        . . . 2 2 2 2 5 5 d 2 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, "地火", function (projectile) {
        Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
        Bullet.setBullet(projectile, Bullet.bulletP.backoff, 0)
        Bullet.setBullet(projectile, Bullet.bulletP.perishTogether, 1000)
        Helper.after(3, function () {
            projectile.destroy()
        })
    })
})
//————————————————//
