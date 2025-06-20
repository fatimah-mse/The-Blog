import { createSlice } from '@reduxjs/toolkit'

import cover1 from '../../images/blogs-cover/blog-1.png'
import cover2 from '../../images/blogs-cover/blog-2.png'
import cover3 from '../../images/blogs-cover/blog-3.png'
import cover4 from '../../images/blogs-cover/blog-4.png'
import cover5 from '../../images/blogs-cover/blog-5.png'
import cover6 from '../../images/blogs-cover/blog-6.png'
import cover17 from '../../images/blogs-cover/blog-17.png'
import cover18 from '../../images/blogs-cover/blog-18.png'
import cover19 from '../../images/blogs-cover/blog-19.png'
import cover20 from '../../images/blogs-cover/blog-20.png'
import detail1 from '../../images/blog-details/detail-1.png'
import detail2 from '../../images/blog-details/detail-2.png'
import detail3 from '../../images/blog-details/detail-3.png'
import detail4 from '../../images/blog-details/detail-4.png'
import detail5 from '../../images/blog-details/detail-5.png'
import detail6 from '../../images/blog-details/detail-6.png'
import detail7 from '../../images/blog-details/detail-7.png'
import detail8 from '../../images/blog-details/detail-8.png'
import detail9 from '../../images/blog-details/detail-9.png'

const initialState = [

    {
        id: 1,
        url: cover1,
        date: 'Alec Whitten • 1 Jan 2023',
        title: 'Bill Walsh leadership lessons',
        desc: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Leadership'
            },
            {
                class: 'bg-off-white text-mydark',
                txt: 'Management'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 2,
        url: cover2,
        date: 'Demi WIlkinson • 1 Jan 2023',
        title: 'PM mental models',
        desc: 'Mental models are simple expressions of complex processes or relationships.',
        btns: [
            {
                class: 'bg-mylight-blue text-mydark-blue',
                txt: 'Product'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            },
            {
                class: 'bg-light-orange text-dark-orange',
                txt: 'Frameworks'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Mental models are simple expressions of complex processes or relationships.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 3,
        url: cover3,
        date: 'Candice Wu • 1 Jan 2023',
        title: 'What is Wireframing?',
        desc: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Introduction to Wireframing and its Principles. Learn from the best in the industry.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 4,
        url: cover4,
        date: 'Natali Craig • 1 Jan 2023',
        title: 'How collaboration makes us better designers',
        desc: 'Collaboration can make our teams stronger, and our individual designs better.',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Collaboration can make our teams stronger, and our individual designs better.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 5,
        url: cover5,
        date: 'Drew Cano • 1 Jan 2023',
        title: 'Our top 10 Javascript frameworks to use',
        desc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
        btns: [
            {
                class: 'bg-light-green text-dark-green',
                txt: 'Software Development'
            },
            {
                class: 'bg-light-pink text-dark-pink',
                txt: 'Tools'
            },
            {
                class: 'bg-light-orange text-dark-orange',
                txt: 'SaaS'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: JavaScript frameworks make development easy with extensive features and functionalities.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 6,
        url: cover6,
        date: 'Orlando Diggs • 1 Jan 2023',
        title: 'Podcast: Creating a better CX Community',
        desc: 'Starting a community doesn’t need to be complicated, but how do you get started?',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Podcasts'
            },
            {
                class: 'bg-off-white text-mydark',
                txt: 'Customer Success'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Starting a community doesn’t need to be complicated, but how do you get started?',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 1,
        url: cover1,
        date: 'Alec Whitten • 1 Jan 2023',
        title: 'Bill Walsh leadership lessons',
        desc: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Leadership'
            },
            {
                class: 'bg-off-white text-mydark',
                txt: 'Management'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 2,
        url: cover2,
        date: 'Demi WIlkinson • 1 Jan 2023',
        title: 'PM mental models',
        desc: 'Mental models are simple expressions of complex processes or relationships.',
        btns: [
            {
                class: 'bg-mylight-blue text-mydark-blue',
                txt: 'Product'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            },
            {
                class: 'bg-light-orange text-dark-orange',
                txt: 'Frameworks'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Mental models are simple expressions of complex processes or relationships.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 3,
        url: cover3,
        date: 'Candice Wu • 1 Jan 2023',
        title: 'What is Wireframing?',
        desc: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Introduction to Wireframing and its Principles. Learn from the best in the industry.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 4,
        url: cover4,
        date: 'Natali Craig • 1 Jan 2023',
        title: 'How collaboration makes us better designers',
        desc: 'Collaboration can make our teams stronger, and our individual designs better.',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Collaboration can make our teams stronger, and our individual designs better.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 5,
        url: cover5,
        date: 'Drew Cano • 1 Jan 2023',
        title: 'Our top 10 Javascript frameworks to use',
        desc: 'JavaScript frameworks make development easy with extensive features and functionalities.',
        btns: [
            {
                class: 'bg-light-green text-dark-green',
                txt: 'Software Development'
            },
            {
                class: 'bg-light-pink text-dark-pink',
                txt: 'Tools'
            },
            {
                class: 'bg-light-orange text-dark-orange',
                txt: 'SaaS'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: JavaScript frameworks make development easy with extensive features and functionalities.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 6,
        url: cover6,
        date: 'Orlando Diggs • 1 Jan 2023',
        title: 'Podcast: Creating a better CX Community',
        desc: 'Starting a community doesn’t need to be complicated, but how do you get started?',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Podcasts'
            },
            {
                class: 'bg-off-white text-mydark',
                txt: 'Customer Success'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Starting a community doesn’t need to be complicated, but how do you get started?',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 1,
        url: cover1,
        date: 'Alec Whitten • 1 Jan 2023',
        title: 'Bill Walsh leadership lessons',
        desc: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Leadership'
            },
            {
                class: 'bg-off-white text-mydark',
                txt: 'Management'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 2,
        url: cover2,
        date: 'Demi WIlkinson • 1 Jan 2023',
        title: 'PM mental models',
        desc: 'Mental models are simple expressions of complex processes or relationships.',
        btns: [
            {
                class: 'bg-mylight-blue text-mydark-blue',
                txt: 'Product'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            },
            {
                class: 'bg-light-orange text-dark-orange',
                txt: 'Frameworks'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Mental models are simple expressions of complex processes or relationships.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 3,
        url: cover3,
        date: 'Candice Wu • 1 Jan 2023',
        title: 'What is Wireframing?',
        desc: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Introduction to Wireframing and its Principles. Learn from the best in the industry.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 4,
        url: cover4,
        date: 'Natali Craig • 1 Jan 2023',
        title: 'How collaboration makes us better designers',
        desc: 'Collaboration can make our teams stronger, and our individual designs better.',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Collaboration can make our teams stronger, and our individual designs better.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 17,
        url: cover20,
        date: 'Olivia Rhye • 1 Jan 2023',
        title: 'UX review presentations',
        desc: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-baby-blue text-dark-blue',
                txt: 'Research'
            },
            {
                class: 'bg-light-pink text-dark-pink',
                txt: 'Presentation'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: How do you create compelling presentations that wow your colleagues and impress your managers?',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 18,
        url: cover19,
        date: 'Phoenix Baker • 1 Jan 2023',
        title: 'Migrating to Linear 101',
        desc: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
        btns: [
            {
                class: 'bg-mylight-blue text-mydark-blue',
                txt: 'Design'
            },
            {
                class: 'bg-light-pink text-dark-pink',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 19,
        url: cover18,
        date: 'Lana Steiner • 1 Jan 2023',
        title: 'Building your API Stack',
        desc: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
        btns: [
            {
                class: 'bg-light-green text-dark-green',
                txt: 'Design'
            },
            {
                class: 'bg-light-pink text-dark-pink',
                txt: 'Research'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    },

    {
        id: 20,
        url: cover17,
        date: 'Olivia Rhye • 1 Jan 2023',
        title: 'Grid system for better Design User Interface',
        desc: 'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
        btns: [
            {
                class: 'bg-off-white text-purple',
                txt: 'Design'
            },
            {
                class: 'bg-light-pink text-dark-pink',
                txt: 'Interface'
            }
        ],
        def: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        details: [
            {
                url: detail1,
                desc: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
                title: 'Breaking Down the Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail2,
                desc: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
                title: 'Example 1: Hierarchical Grid',
                txt: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
            },
            {
                url: detail3,
                desc: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 2: Column Grid',
                txt: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
            },
            {
                url: detail4,
                desc: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 3: Modular Grid',
                txt: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
            },
            {
                url: detail5,
                desc: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
            },
            {
                url: detail6,
                desc: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
                title: 'Example 4: Breaking the Grid',
                txt: 'Using a grid benefits both end users and the designers alike: Designers can quickly put together well-aligned interfaces. Users can easily scan predictable grid-based interfaces. A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.'
            },
            {
                url: detail7,
                desc: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
                title: 'Choosing and Setting Up Your Grid',
                txt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deleniti, dignissimos, repellendus, dicta non incidunt nostrum temporibus eum ipsum autem error aut? Doloribus officiis exercitationem voluptate facere optio explicabo aspernatur necessitatibus iure nemo beatae, totam asperiores recusandae expedita nesciunt soluta suscipit magnam quisquam unde, qui laborum, illum iste in? Quia, corporis similique nulla animi perferendis culpa amet iusto quae, saepe optio laboriosam officiis unde velit in iure vero sequi eum dolor omnis necessitatibus aliquid facere. Itaque repellendus quasi ratione. Necessitatibus nemo libero aliquam atque sequi, saepe ex nulla repellendus velit praesentium maxime. Odio porro quos repellat aliquam voluptatibus, fugiat quam possimus facilis dicta architecto eum est pariatur illo nostrum dolor, ipsam laboriosam. Accusamus eveniet aliquam asperiores quos accusantium aliquid commodi non ab quis eligendi perspiciatis voluptatem sunt, fugiat neque velit, quam ipsum. Dolorum amet cum ex dolorem perspiciatis, facilis in placeat libero enim quisquam voluptatem! Distinctio, eaque inventore ex quam nostrum ullam, necessitatibus eum explicabo rerum adipisci numquam voluptatibus ducimus! Nihil sapiente ut perspiciatis, commodi tempora nam laboriosam voluptatibus corrupti voluptas officia sunt obcaecati doloremque nulla unde tempore fugit rerum hic. Nam hic expedita, qui eligendi nesciunt totam aliquam excepturi magni, nihil debitis quidem iusto enim repudiandae, ut molestias temporibus quibusdam ipsum pariatur. Ab dolor, dignissimos porro quas culpa illum magnam aut beatae modi et perferendis sint fugit quisquam. Dolores iste placeat veniam commodi necessitatibus nobis minima voluptate vel asperiores, distinctio rerum molestias omnis at modi rem, accusamus ratione? Debitis sequi officia provident laborum quam. Sequi labore eligendi quod numquam blanditiis. Quae sequi minima quod, voluptatem aperiam, possimus reiciendis quas atque est eos laboriosam iure accusantium autem consequuntur asperiores excepturi impedit? Repellat maxime commodi ducimus ex accusamus ut minima facilis dolor iste quis illum sint, atque et vel soluta harum eveniet ea earum officiis. Doloremque aliquam ab ducimus deleniti hic magni debitis dolore voluptates at aliquid sunt consectetur velit dolorem, quae harum repudiandae ipsa quas ad incidunt, voluptas architecto quod pariatur. Veritatis, voluptate quidem neque quos incidunt maxime exercitationem fuga harum minus pariatur suscipit reiciendis? Nobis, accusamus excepturi iusto odit est ullam commodi amet maxime. Vel consequatur incidunt non laudantium.'
            },
            {
                url: detail8,
                desc: 'Easily set the number of columns, the gutter size, and margin size in Figma.',
                title: 'Always place content within columns, not gutters',
                txt: 'The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.'
            },
            {
                url: detail9,
                desc: 'Content or elements should be placed within and across columns, not gutters.',
                title: 'Consider using an 8px grid system',
                txt: 'For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid. Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
            }
        ]
    }

]

const articleSlice = createSlice({
    name: 'articles',
    initialState ,
    reducers: {
        
    },
})


export default articleSlice.reducer