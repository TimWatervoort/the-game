import { levels } from './constants';

export const decks = [
  {
    number: 1,
    title: 'Curse',
    punishment: levels.MINOR,
    reward: levels.NONE,
    description: 'You must adhere to this effect for one round. A punishment will be applied each time you fail to do so.',
  },
  {
    number: 2,
    title: 'Distortion',
    punishment: levels.MINOR,
    reward: levels.NONE,
    description: 'All players must adhere to this effect for one round. A punishment will be applied each time a player fails to do so.',
  },
  {
    number: 3,
    title: 'Democracy',
    punishment: levels.MINOR,
    reward: levels.MINOR,
    description: `All players will vote on the person who best fits the prompt. The majority winner will get either a reward or punishment, depending on the card.
    The player who drew the card will also roll a D4 to see if the turn becomes a dictatorship card, in which case all players who did not vote with the majority
    get a MAJOR punishment and those who did vote with the majority get a MINOR reward.`,
  },
  {
    number: 4,
    title: 'Melee',
    punishment: levels.MINOR,
    reward: levels.MINOR,
    description: `All players who are in will do as the card says. Those who succeed get the reward. Those who fail or concede get the punishment.`,
  },
  {
    number: 5,
    title: 'Trial',
    punishment: levels.MAJOR,
    reward: levels.MAJOR,
    description: `The player who drew the card must complete the challenge on the card. If they succeed, they get the reward. If they fail or concede, they get
    the punishment.`,
  },
  {
    number: 6,
    title: 'Duel',
    punishment: levels.MAJOR,
    reward: levels.MINOR,
    description: `The card will state if the opponent is group's choice or random. The winner of the challenge on the card will get the reward, the loser gets
    the punishment. If both players concede, they both get the punishment.`,
  },
  {
    number: 7,
    title: 'Champion',
    punishment: levels.MINOR,
    reward: levels.MINOR,
    description: `The player who drew the card will give it to a player of their choice. The chosen player is now bound by the rule or effect on the card until
    the end of the game unless cleansed by another card. Each time they fail to adhere to the rule, they get a punishment. Each round they complete without failing
    the rule earns them a reward.`,
  },
  {
    number: 8,
    title: 'Boon',
    punishment: levels.NONE,
    reward: levels.NONE,
    description: 'The player who drew the card has a positive effect given to them.',
  },
];
