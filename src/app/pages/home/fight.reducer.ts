import { Action } from '@ngrx/store';

export const ATTACK = 'ATTACK';
export const DEFEAT = 'DEFEAT';

export function FightReducer(state: number = 100, action:Action) {
    let damage = Math.floor(Math.random() * 25)

    switch(action.type){
        case(ATTACK):
            return state = state - damage;

        case(DEFEAT):
            return state = 0;

        default:
            return state

    }

}