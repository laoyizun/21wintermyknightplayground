Enemy.setMonsters0(function () {
    Enemy.setMonsters("我的幽灵", function (monster) {
        Enemy.addMember(monster, "幽灵", 1)
        Enemy.setMonstersV(monster, Enemy.msKind.occurrence_interval, 100)
        Enemy.setMonstersV2(monster, Enemy.msKind2.reinforcements, true)
        Enemy.setActionM(monster, 1, function (enemy) {
            Enemy.randomMove(enemy, sprites.dungeon.darkGroundCenter)
            Enemy.randomAtk(enemy)
        })
        Enemy.setActionM(monster, 1, function (enemy) {
            Enemy.jmp(monster, enemy, 0)
        })
    })
    Enemy.setMonsters("1幽灵", function (monster) {
        Enemy.addMember(monster, "幽灵", 1)
        Enemy.setMonstersV(monster, Enemy.msKind.occurrence_interval, 10)
        Enemy.setActionM(monster, 1, function (enemy) {
            Enemy.randomAtk(enemy)
            Enemy.enemyMoveTo(enemy, Enemy.crORxy.xy, Player.getPlayer().x, Player.getPlayer().y)
        })
        Enemy.setActionM(monster, 0, function (enemy) {
            Enemy.randomAtk(enemy)
        })
        Enemy.setActionM(monster, 1, function (enemy) {
            Enemy.jmp(monster, enemy, 0)
        })
        Enemy.setActionName(monster, "跟随攻击")
    })
    Enemy.setMonsters("3幽灵", function (monster) {
        Enemy.addMember(monster, "幽灵", 3)
        Enemy.setMonstersV(monster, Enemy.msKind.occurrence_interval, 100)
        Enemy.setActionM2(monster, "跟随攻击")
    })
    Enemy.setMonsters("1幽灵持续", function (monster) {
        Enemy.addMember(monster, "幽灵", 1)
        Enemy.setMonstersV2(monster, Enemy.msKind2.continuous, true)
        Enemy.setMonstersV2(monster, Enemy.msKind2.unimportant, true)
        Enemy.setMonstersV(monster, Enemy.msKind.occurrence_probability, 20)
        Enemy.setMonstersV(monster, Enemy.msKind.occurrence_interval, 8000)
        Enemy.setActionM2(monster, "跟随攻击")
    })
    Enemy.setMonsters("大幽灵boss", function (monster) {
        Enemy.addMember(monster, "大幽灵", 1)
        Enemy.setMonstersV2(monster, Enemy.msKind2.boss, true)
        Enemy.setActionM(monster, 0.5, function (enemy) {
            if (Enemy.enemyHp(enemy) < 50) {
                if (Math.percentChance(0)) {
                    Enemy.skillAtk(enemy, randint(0, 4))
                }
                Enemy.skillAtk(enemy, 5, 4.8)
            } else {
                Enemy.jmp(monster, enemy, 1)
            }
        })
        Enemy.setActionM(monster, 0.1, function (enemy) {
            Enemy.skillAtk(enemy, randint(0, 2))
        })
        Enemy.setActionM(monster, 0, function (enemy) {
            Enemy.skillAtk(enemy, randint(2, 4))
        })
        Enemy.setActionM(monster, 0.1, function (enemy) {
            Enemy.enemyMoveTo(enemy, Enemy.crORxy.xy, Player.getPlayer().x, Player.getPlayer().y)
            Enemy.jmp(monster, enemy, 0)
        })
    })
})