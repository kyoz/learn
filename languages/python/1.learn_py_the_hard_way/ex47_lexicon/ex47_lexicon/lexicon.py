lexicon_dataset = {
    'direction': 'north south east west down up left right back',
    'verb': 'go stop kill eat',
    'stop': 'the in of from at it',
    'noun': 'door bear princess cabinet'
}

def scan(sentence):
    result = []
    words = sentence.split(' ')

    for word in words:
        if word.isnumeric():
           word = int(word)

        tuple = (find_word_type(str(word)), word)
        result.append(tuple)

    return result 

def find_word_type(word):
    if word.isnumeric():
        return 'number'

    for type in lexicon_dataset.keys():
        if word in lexicon_dataset[type]:
            return type

    return 'error'
