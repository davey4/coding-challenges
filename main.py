
def duplicate_encode(word):
    new_string = ''
    str = word.lower()
    hash = {}

    for char in str:
        if not hash.get(char):
            hash[char] = 1
        else:
            hash[char] = hash[char] + 1

    for char in str:
        count = hash.get(char)
        if count > 1:
            new_string += '&'
        else:
            new_string += '#'

    return new_string


duplicate_encode('hello')
