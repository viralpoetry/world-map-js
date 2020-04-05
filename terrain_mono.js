var worldMap =
[['000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'],
 ['000000000000000000000000000000001110000111111100000000000000000000000000000000000000000000000000000000000000000000000000'],
 ['000000000000000000000000000001111011111111111100000000000000000000000000000000000000000000000000000000000000000000000000'],
 ['000000000000000000000000000011100000111111111000000000000000000000000000111111000000000000000000000000000000000000000000'],
 ['000000000000000000011111010111100000111111110000000000000000000000011111111111111111001110000000000000000000000000000000'],
 ['000000111111111111111111111000111000111100000100000001111111111111111111111111111111111111111111111111100000000000000000'],
 ['000111111111111111111111101000110000110000000000000011101111111111111111111111111111111111111111111110000000000000000000'],
 ['001111101111111111111110000011000000000000000000000111101111111111111111111111111111111111111111011100000000000000000000'],
 ['001100000011111111111110000111110000000000000000100001100111111111111111111111111111111111110000011000000000000000000000'],
 ['000000000011111111111111001111110000000000000001100011001111111111111111111111111111111111110000001000000000000000000000'],
 ['000000000011111111111111111111011000000000000000011111111111111111111111111111111111111111111111000000000000000000000000'],
 ['000000000011111111111011111110011000000000000000111111111111111111111111111111111111111111111110000000000000000000000000'],
 ['000000000011111111111101111110000000000000000000011111111110111110111111111111111111111111111110000000000000000000000000'],
 ['000000000111111111111111110000000000000000000001111001001110000110011111111111111111111111111100110000000000000000000000'],
 ['000000001111111111111111100000000000000000000001110010101011111111011111111111111111111111111000010000000000000000000000'],
 ['000000001111111111111110000000000000000000000001011110000000001111111111111111111111111111100001110000000000000000000000'],
 ['000000000111111111111100000000000000000000000011111111000000001111111111111111111111111111110001000000000000000000000000'],
 ['000000000111111111111000000000000000000000000011111111111111111111111111111111111111111111110000000000000000000000000000'],
 ['000000000101111100001000000000000000000000000111111111111111111111011111111111111111111111111000000000000000000000000000'],
 ['000000000001111000000000000000000000000000001111111111111111101111100011111111111111111111110000000000000000000000000000'],
 ['000000000000111001000001000000000000000000011111111111111111110111111100001111110001111100000000000000000000000000000000'],
 ['000000000000011111000000100000000000000000011111111111111111111011111000000111100000111100000100000000000000000000000000'],
 ['000000000000000011000000000000000000000000011111111111111111111001110000000011000000011110000100000000000000000000000000'],
 ['000000000000000001100000000000000000000000011111111111111111111111000000000011000000001110000110000000000000000000000000'],
 ['000000000000000000000111111100000000000000000111111111111111111111100000000000000000000000000011000000000000000000000000'],
 ['000000000000000000000111111110000000000000000011110111111111111111100000000000000000001000001000000000000000000000000000'],
 ['000000000000000000000111111111100000000000000000000001111111111111000000000000000000010100011000000000000000000000000000'],
 ['000000000000000000000111111111100000000000000000000011111111111110000000000000000000001100111010000000000000000000000000'],
 ['000000000000000000001111111111111000000000000000000001111111111100000000000000000000000100110000001000000000000000000000'],
 ['000000000000000000001111111111111111100000000000000000111111111000000000000000000000000000000000000011100000000000000000'],
 ['000000000000000000000111111111111111000000000000000000111111111000000000000000000000000000000000000001010000000000000000'],
 ['000000000000000000000111111111111111000000000000000000111111111100000000000000000000000000000000000000000000000000000000'],
 ['000000000000000000000011111111111111000000000000000000111111111100000000000000000000000000000000011001000000000000000000'],
 ['000000000000000000000001111111111110000000000000000000111111111000100000000000000000000000000001111101000000000000000000'],
 ['000000000000000000000000111111111110000000000000000000111111110001000000000000000000000000001111111111100000000000000000'],
 ['000000000000000000000000111111111100000000000000000000111111110001000000000000000000000000111111111111100000000000000000'],
 ['000000000000000000000000011111110000000000000000000000011111100000000000000000000000000000111111111111110000000000000000'],
 ['000000000000000000000000011111110000000000000000000000011111100000000000000000000000000000111111111111110000000000000000'],
 ['000000000000000000000000011111110000000000000000000000011111000000000000000000000000000000111111111111100000000000000000'],
 ['000000000000000000000000011111000000000000000000000000000000000000000000000000000000000000100000001111000000000000000000'],
 ['000000000000000000000000011111000000000000000000000000000000000000000000000000000000000000000000001100000000010000000000'],
 ['000000000000000000000000011110000000000000000000000000000000000000000000000000000000000000000000000000000001100000000000'],
 ['000000000000000000000000001110000000000000000000000000000000000000000000000000000000000000000000000100000011000000000000'],
 ['000000000000000000000000001100000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000'],
 ['000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'],
 ['000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'],
 ['000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000']];