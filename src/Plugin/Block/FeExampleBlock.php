<?php

namespace Drupal\fe_example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'FE Example' Custom Block.
 *
 * @Block(
 *   id = "fe_example",
 *   admin_label = @Translation("FE Example Custom Block"),
 * )
 */
class FeExampleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return ['label_display' => FALSE];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $default_tasks = [
      [
        'title' => 'Default Task - 1 from block build',
        'status' => 'done'
      ],
      [
        'title' => 'Default Task Task - 2 from block build',
        'status' => 'done'
      ],
      [
        'title' => 'Default Task Task - 3 from block build',
        'status' => 'to-do'
      ]
    ];
    $output = [
      '#theme' => 'fe_example',
      '#tasks' => $default_tasks,
      '#attached' => [
        'library' => [
          'fe_example/fe-example'
        ],
        'drupalSettings' => [
          'fe_example' => [
            'default_tasks' => $default_tasks
          ]
        ]
      ]
    ];

    return $output;
  }

}