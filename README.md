
# Magical Arena Combat System


This project simulates a simple battle between two players in a magical arena. Each player has health, strength, and attack attributes. Players take turns attacking each other, with damage calculated based on dice rolls and player stats. The game ends when one player's health reaches zero.

## Game Rules

### Player Attributes:

- Health: Total health points.
- Strength: Determines damage reduction.
- Attack: Determines damage output.

### Dice Attributes:
A player rolls a six-sided die, the combat system utilizes a 6-sided die roll to calculate attack and defense outcomes, introducing an element of randomness.

### Battle Mechanics:
- Two players engage in a turn-based battle.
- Each turn, a player rolls a six-sided die.
- Damage dealt is calculated as (dice roll * attack) - (opponent's dice roll * opponent's strength).
- If damage is positive, the defending player's health is reduced by that amount.
- The player with lower health attacks first.
- The game ends when a player's health reaches zero.

### Unit Testing: 
Comprehensive unit tests ensure the reliability and correctness of the combat mechanics.

### Skills: 
Java · Object-Oriented Programming (OOP) · Unit Testing · Logging · Git
