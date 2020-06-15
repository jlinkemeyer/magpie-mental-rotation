// In this file you can instantiate your views


// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `<center>Thank you for joining this experiment! 
            <br />
            <br />
            To start the experiment, please press the button below.</center>`,
  buttonText: 'start'
});

// For most tasks, you need instructions views
const instructions_practice = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions',
  text: `<center>You will see pictures of geometrical objects. Your task is to compare the objects and decide whether they are the same or different. Please press 'f' if you think the objects are the same and press 'j' if you think they are different. 
            <br />
            <br />
            You will start with a practice of 12 pictures to get yourself familiar with the task.</center>`,
  buttonText: 'go to practice'
});

const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main',
  title: 'Get ready for the main experiment',
  text: `<center>The main experiment will follow in the next section.
            <br />
            Please try to answer as quickly and accurately as possible!
            <br />
            <br />
            To start the experiment, press the button below.</center>`,
  buttonText: 'begin'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A_practice = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice_practice.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A_practice',
  data: _.shuffle(trial_info.forced_choice_practice),
  pause: 250
  // you can add custom functions at different stages through a view's life cycle
});

// Here, we initialize a normal forced_choice view
const forced_choice_2A_main = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice_main.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A_main',
  data: _.shuffle(trial_info.forced_choice_main),
  pause: 250
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
