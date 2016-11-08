'use strict';

const React = require('react'),
    ReactDOM = require('react-dom'),
    $ = require('jquery');

class NotesAnim extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if ($('body').width() > 1100) {
            this.renderBubbles();
        }
    }

    renderBubbles() {
        var $bubbles = $(ReactDOM.findDOMNode(this));
        var min_bubble_count = 4, // Minimum number of bubbles
            max_bubble_count = 8, // Maximum number of bubbles
            min_bubble_size = 2, // Smallest possible bubble diameter (px)
            max_bubble_size = 8; // Maximum bubble blur amount (px)

        var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));

        for (var i = 0; i < bubbleCount; i++) {
            var icon = "";
            switch (this.props.type) {
                case "game":
                    icon = "fa fa-gamepad";
                    break;
                case "music":
                    icon = "fa fa-music";
                    break;
                case "web":
                    icon = "fa fa-laptop";
                    break;
                default:
                    icon = "fa fa-star";
                    break;
            }
            $bubbles.append('<div class="bubble-container"><div class="bubble"><i class="' + icon + '" aria-hidden="true" /></div></div>');
        }

        // Now randomise the various bubble elements
        $bubbles.find('.bubble-container').each(function () {

            // Randomise the bubble positions (0 - 100%)
            var pos_rand = Math.floor(Math.random() * 101);

            // Randomise their size
            var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));

            // Randomise the time they start rising (0-15s)
            var delay_rand = Math.floor(Math.random() * 16);

            // Randomise their speed (3-8s)
            var speed_rand = 20 + Math.floor(Math.random() * 30);

            // Random blur
            var blur_rand = Math.floor(Math.random() * 2);

            // Cache the this selector
            var $this = $(this);

            // Apply the new styles
            $this.css({
                'left': pos_rand + '%',

                '-webkit-animation-duration': speed_rand + 's',
                '-moz-animation-duration': speed_rand + 's',
                '-ms-animation-duration': speed_rand + 's',
                'animation-duration': speed_rand + 's',

                '-webkit-animation-delay': delay_rand + 's',
                '-moz-animation-delay': delay_rand + 's',
                '-ms-animation-delay': delay_rand + 's',
                'animation-delay': delay_rand + 's',

                '-webkit-filter': 'blur(' + blur_rand + 'px)',
                '-moz-filter': 'blur(' + blur_rand + 'px)',
                '-ms-filter': 'blur(' + blur_rand + 'px)',
                'filter': 'blur(' + blur_rand + 'px)'
            });

            $this.children('.bubble').css({
                'width': size_rand + 'px',
                'height': size_rand + 'px'
            });
        });
    }

    render() {
        return (
            <div className="notes-container">
                <div className="bubbles" ></div>
            </div>
        );
    }
}

module.exports = NotesAnim;
