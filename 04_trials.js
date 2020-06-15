// In this file you can specify the trial data for your experiment


// Construct array with numbers ranging from 1-60
let images_number = [];
for (let i = 1; i <= 60; i++) {
    images_number.push(i);
}
let expected = ["different", "same"];
let rotation = ['150', '50', '50', '150'];


const get_trials = function(start, end) {

    const trial_array = [];

    
    for (let i = start; i <= end; i++) {
        
        
        // every trial contains key-information
        // picture name consists of picture number between 1 and 60, rotation (50 or 150) and expected value 
        // (same, different). 
        var trial = {
            key1: 'f',
            key2: 'j',
            f: 'same',
            j: 'different',
            picture: "images/" + Math.round((images_number[i]/4) + 0.3) + "_" + rotation[images_number[i]%4] + "_" + expected[images_number[i]%2] + ".jpg",
            item: Math.round((images_number[i]/4) + 0.3),
            picture_number: images_number[i],
            degree_of_rotation: rotation[images_number[i]%2],
            expected: expected[images_number[i]%2],
            question: "Are the objects the same or different?"
        };
        
        trial_array.push(trial);
    }

    return trial_array;
};

const trial_info = {

    forced_choice_practice: get_trials(0, 11),
    forced_choice_main: get_trials(12, 59),

};

/*let images = ["images/1_50_different.jpg", "images/1_50_same.jpg", "images/1_150_different.jpg", "images/1_150_same.jpg", "images/2_50_different.jpg"];
let picture_number_mapping = [1, 2 ,3, 4, 5];
let rotation_mapping = [50, 50, 150, 150, 50];
let expected_mapping = ["different", "same", "different", "same", "different"];

const get_trials = function(start, end) {

    const trial_array = [];

    for (let i = start; i <= end; i++) {
        var trial = {
            key1: 'f',
            key2: 'j',
            j: 'same',
            f: 'different',
            picture: images[i],
            picture_number: picture_number_mapping[i],
            degree_of_rotation: rotation_mapping[i],
            expected: expected_mapping[i],
            question: "Are the objects the same or different?"
        };

        trial_array.push(trial);
    }

    return trial_array;
};

const trial_info = {

    forced_choice: get_trials(0, 4),

};*/


/*forced_choice: [
    {
        key1: 'j',
        key2: 'f',
        picture: "images/1_50_different.jpg",
        j: 'same',
        f: 'different',
        picture_number: '1',
        degree_of_rotation: '50',
        expected: 'different'
    },
    {
        key1: 'j',
        key2: 'f',
        picture: "images/1_50_same.jpg",
        j: 'same',
        f: 'different',
        picture_number: '2',
        degree_of_rotation: '50',
        expected: 'same'
    },
    {
        key1: 'j',
        key2: 'f',
        picture: "images/1_150_different.jpg",
        j: 'same',
        f: 'different',
        picture_number: '3',
        degree_of_rotation: '150',
        expected: 'different'
    },
    {
        key1: 'j',
        key2: 'f',
        picture: "images/1_150_same.jpg",
        j: 'same',
        f: 'different',
        picture_number: '4',
        degree_of_rotation: '150',
        expected: 'same'
    },
    {
        key1: 'j',
        key2: 'f',
        picture: "images/2_50_different.jpg",
        j: 'same',
        f: 'different',
        picture_number: '5',
        degree_of_rotation: '50',
        expected: 'different'
    }
]*/