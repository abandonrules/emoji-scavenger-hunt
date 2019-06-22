/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

export interface EmojiItem {
    [index: string]: string;
}

// Items for the demo are always selected in the same order as they are defined
// here.
export const EMOJIS_LVL_DEMO: Array < EmojiItem > = [{
        'name': 'watch',
        'emoji': '⌚',
        'path': '/img/emojis/game/watch.svg'
    },
    {
        'name': 'shoe',
        'emoji': '👞',
        'path': '/img/emojis/game/shoe.svg'
    },
    {
        'name': 'banana',
        'emoji': '🍌',
        'path': '/img/emojis/game/banana.svg'
    },
    {
        'name': 'beer',
        'emoji': '🍺',
        'path': '/img/emojis/game/beer.svg'
    },
    {
        'name': 'jack o lantern',
        'emoji': '🎃',
        'path': '/img/emojis/game/jack o lantern.svg'
    }
];
export const EMOJIS: any = {
    OFFICE: {
        EMOJIS_LVL_1: [{
                'name': 'hand',
                'emoji': '✋',
                'path': '/img/emojis/game/hand.svg'
            },
            {
                'name': 'mouse',
                'emoji': '🖱',
                'path': '/img/emojis/game/mouse.svg'
            },
            {
                'name': 'plug',
                'emoji': '🔌',
                'path': '/img/emojis/game/plug.svg'
            },
            {
                'name': 'light bulb',
                'emoji': '💡',
                'path': '/img/emojis/game/light bulb.svg'
            }
        ],
        EMOJIS_LVL_2: [{
            'name': 'key',
            'emoji': '🔑',
            'path': '/img/emojis/game/key.svg'
        }],
        EMOJIS_LVL_3: [
            {
                'name': 'wallet',
                'emoji': '👛',
                'path': '/img/emojis/game/wallet.svg'
            },
            {
                'name': 'cup',
                'emoji': '☕',
                'path': '/img/emojis/game/cup.svg'
            }
        ],
        EMOJIS_LVL_4: [
            {
                'name': 'watch',
                'emoji': '⌚',
                'path': '/img/emojis/game/watch.svg'
            },
            {
                'name': 'trash can',
                'emoji': '🗑',
                'path': '/img/emojis/game/trash can.svg'
            }
        ],
        EMOJIS_LVL_5: [
            {
                'name': 'newspaper',
                'emoji': '📰',
                'path': '/img/emojis/game/newspaper.svg'
            },
            {
                'name': 'plate',
                'emoji': '🍽',
                'path': '/img/emojis/game/plate.svg'
            }
        ],
    },
    HOME: {
        EMOJIS_LVL_1: [{
                'name': 'book',
                'emoji': ':books:',
                'path': '/img/emojis/game/book.svg'
            },
            {
                'name': 'cellphone',
                'emoji': ':iphone:',
                'path': '/img/emojis/game/cellphone.svg'
            },
            {
                'name': 'keyboard',
                'emoji': ':keyboard:',
                'path': '/img/emojis/game/keyboard.svg'
            },
            {
                'name': 'tv',
                'emoji': ':tv:',
                'path': '/img/emojis/game/tv.svg'
            },
            {
                'name': 'laptop',
                'emoji': ':computer:',
                'path': '/img/emojis/game/laptop.svg'
            },
            {
                'name': 'shirt',
                'emoji': ':shirt:',
                'path': '/img/emojis/game/shirt.svg'
            },
            {
                'name': 'pants',
                'emoji': ':jeans:',
                'path': '/img/emojis/game/pants.svg'
            },
            {
                'name': 'clock',
                'emoji': ':clock2:',
                'path': '/img/emojis/game/clock.svg'
            },
            {
                'name': 'hat',
                'emoji': ':billed_cap:',
                'path': '/img/emojis/game/hat.svg'
            }
        ],
        EMOJIS_LVL_2: [
            {
                'name': 'backpack',
                'emoji': ':school_satchel:',
                'path': '/img/emojis/game/backpack.svg'
            },
            {
                'name': 'headphones',
                'emoji': ':headphones:',
                'path': '/img/emojis/game/headphones.svg'
            },
            {
                'name': 'display',
                'emoji': ':desktop:',
                'path': '/img/emojis/game/display.svg'
            },
            {
                'name': 'spoon',
                'emoji': ':spoon:',
                'path': '/img/emojis/game/spoon.svg'
            },
            {
                'name': 'bowl',
                'emoji': ':bowl_with_spoon:',
                'path': '/img/emojis/game/bowl.svg'
            }
        ],
        EMOJIS_LVL_3: [
            {
                'name': 'banana',
                'emoji': ':banana:',
                'path': '/img/emojis/game/banana.svg'
            },
            {
                'name': 'car',
                'emoji': ':red_car:',
                'path': '/img/emojis/game/car.svg'
            },
            {
                'name': 'flower',
                'emoji': ':blossom:',
                'path': '/img/emojis/game/flower.svg'
            },
            {
                'name': 'umbrella',
                'emoji': ':umbrella2:',
                'path': '/img/emojis/game/umbrella.svg'
            }
        ],
        EMOJIS_LVL_4: [
            {
                'name': 'lock',
                'emoji': ':lock:',
                'path': '/img/emojis/game/lock.svg'
            },
            {
                'name': 'lemon',
                'emoji': ':lemon:',
                'path': '/img/emojis/game/lemon.svg'
            },
            {
                'name': 'flashlight',
                'emoji': ':flashlight:',
                'path': '/img/emojis/game/flashlight.svg'
            },
            {
                'name': 'candle',
                'emoji': ':candle:',
                'path': '/img/emojis/game/candle.svg'
            },
            {
                'name': 'radio',
                'emoji': ':radio:',
                'path': '/img/emojis/game/radio.svg'
            }
        ],
        EMOJIS_LVL_5: [
            {
                'name': 'motor scooter',
                'emoji': ':motor_scooter:',
                'path': '/img/emojis/game/motor scooter.svg'
            }
        ]
    }
}