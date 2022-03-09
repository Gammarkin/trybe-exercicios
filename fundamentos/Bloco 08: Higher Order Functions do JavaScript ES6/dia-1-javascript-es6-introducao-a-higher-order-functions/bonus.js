const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const returnDragonDmg = () => Math.round(Math.random() * (50 - 15 + 1)) + 15;

const returnWarriorDmg = () => Math.round(Math.random() * ((30 * 2) - 30 + 1)) + 30;

const returnMageDmg = () => {
    const dgm = Math.round(Math.random() * ((45 * 2) - 45 + 1)) + 45;
    mage.mana -= 15
    if (mage.mana <= 15) return 'não possui mana suficiente!';
    return { dano: dgm, mana: `${mage.mana} restante. 15 de mana gasta!` };
}

const gameActions = {
    warriorATK: () => {
        const hitOnDragon = returnWarriorDmg();
        dragon.healthPoints -= hitOnDragon;
        warrior.damage = returnDragonDmg();
    },
    mageATK: () => {
        const hitOnDragon = returnMageDmg().dano;
        dragon.healthPoints -= hitOnDragon;
        mage.damage = returnMageDmg().dano;
    },
    dragonATK: () => {
        const hitOnPlayers = returnDragonDmg();
        warrior.healthPoints -= hitOnPlayers;
        mage.healthPoints -= hitOnPlayers;
        dragon.damage = returnDragonDmg();
    },
    battleMembers: () => {
        gameActions.warriorATK(), gameActions.mageATK(), gameActions.dragonATK()
    }

};
gameActions.battleMembers();
console.log(battleMembers);
