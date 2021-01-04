# D8 FE Example Custom Block

## Install

1. Save the custom module in `modules/custom/` directory.

2. Enable the module. Open the terminal and run `drush en fe_example -y` or go to the admin page `admin/modules` and find the module `FE Example Custom Block` and enable it.

3. Clear caches. Open the terminal and run `drush cr` or if you have `Devel` module installed and enabled you can clear it with it.

4. Add the custom block. Navigate to `admin/structure/block`, choose the region where you want to place the block, click on the `place block` button and find the `FE Example Custom Block` and place it. Save the blocks configurations. Just to see the example add the block to the `Content` Region and do not add any restrictions.

5. Clear caches. `Step 3`.

6. Navigate to any content where the block is visible and the custom block should render a lists of to-do tasks with some default.

## Styles

The custom module uses `sass` and `gullp` to create the `css` file. If you wish to modify the styles please:

1. In the terminal, go to the custom module folder `cd modules/custom/fe_example/`
2. Run `npm install`
3. Run `gulp`
4. Modify or add any file inside the `sass` folder. If you add more files please import them in the `sass/fe-example.scss`.

## Twig Template

If you wish to modify the template you can do so in the `templates/fe_example.html.twig` file. Right now it receives 2 variables, `tasks` and `alter_task`.

The `tasks` variable is defined in the `fe_example.module` file and is set in the Custom Block file `src/Plugin/Block/FeExampleBlock.php` inside of the `build` function. In this file is also set the javascript variable `default_tasks` inside of the `drupalSettings` variable.

In the module file `fe_example.module` there is a preprocess hook to alter the `tasks` variable in the template and also a new variable for the `drupalSettings.fe_example` variable for the js file.

## JavaScript

There is a js file inside of the `js` folder with some basic Drupal behaviors. They use the `context` variable when selecting DOM elements and the `drupalSettings` object to access the variables of the custom module.
