var config = {
    container: "#collapsable-example",
    levelSeparation:    120,
    siblingSeparation:  80,
    subTeeSeparation:   80,   

    node: {
        collapsable: true
    },

    animation: {
        nodeAnimation: "easeOutBounce",
        nodeSpeed: 700,
        connectorsAnimation: "bounce",
        connectorsSpeed: 700
    },

    connectors: {
        type: "bCurve",
        style: {
            "stroke-width": 3,
            "stroke": "#fff"
        }
    }
},

basic = {
    image: "img/basic-drill.png",
    collapsable: false,
    
    link: {
        href: "tree/basic.html"
    }
},

extraction = {
    parent: basic,
    image: "img/research.png",
    collapsable: false,
    HTMLclass: "research",

    link: {
        href: "tree/extraction.html"
    }
}

hull = {
    parent: basic,
    image: "img/research.png",
    collapsable: false,
    HTMLclass: "research",

    link: {
        href: "tree/hull.html"
    }
}

laser = {
    parent: basic,
    image: "img/research.png",
    HTMLclass: "research",

    link: {
        href: "tree/laser.html"
    }
}

nav = {
    parent: basic,
    image: "img/research.png",
    HTMLclass: "research",

    link: {
        href: "tree/navigation.html"
    }
}


bronze_machine = {
    parent: extraction,
    image: "img/bronze_gear.png",
    HTMLclass: "machine",

    link: {
        href: "tree/bronze_machine.html"
    }
}

silver_machine = {
    parent: bronze_machine,
    image: "img/silver_gear.png",
    HTMLclass: "machine",

    link: {
        href: "tree/silver_machine.html"
    }
}

gold_machine = {
    parent: silver_machine,
    image: "img/gold_gear.png",
    HTMLclass: "machine",

    link: {
        href: "tree/gold_machine.html"
    }
}

diamond_machine = {
    parent: gold_machine,
    image: "img/diamond_gear.png",
    HTMLclass: "machine",

    link: {
        href: "tree/diamond_machine.html"
    }
}

bless1 = {
    parent: extraction,
    image: "img/luck1.png",
    collapsable: true,
    HTMLclass: "speed",

    link: {
        href: "tree/bless1.html"
    }
}

bless2 = {
    parent: bless1,
    image: "img/luck2.png",
    collapsable: true,
    HTMLclass: "speed",

    link: {
        href: "tree/bless2.html"
    }
}

bless3 = {
    parent: bless2,
    image: "img/luck3.png",
    collapsable: true,
    HTMLclass: "speed",

    link: {
        href: "tree/bless3.html"
    }
}


bless4 = {
    parent: bless3,
    image: "img/luck4.png",
    collapsable: true,
    HTMLclass: "speed",

    link: {
        href: "tree/bless4.html"
    }
}

charm1 = {
    parent: extraction,
    image: "img/clover1.png",
    HTMLclass: "speed",

    link: {
        href: "tree/charm1.html"
    }
}

charm2 = {
    parent: charm1,
    image: "img/clover2.png",
    HTMLclass: "speed",
    
    link: {
        href: "tree/charm2.html"
    }
}

charm3 = {
    parent: charm2,
    image: "img/clover3.png",
    HTMLclass: "speed",

    link: {
        href: "tree/charm3.html"
    }
}

charm4 = {
    parent: charm3,
    image: "img/clover4.png",
    HTMLclass: "speed",
    
    link: {
        href: "tree/charm4.html"
    }
}

titanium_shield = {
    parent: hull,
    image: "img/titanium_shield.png",
    HTMLclass: "shield",

    link: {
        href: "tree/titanium.html"
    }
}

osmium_shield = {
    parent: titanium_shield,
    image: "img/osmium_shield.png",
    HTMLclass: "shield",

    link: {
        href: "tree/osmium.html"
    }
}

iridium_shield = {
    parent: osmium_shield,
    image: "img/iridium_shield.png",
    HTMLclass:"shield",

    link: {
        href: "tree/iridium.html"
    }
}

tungsten_shield = {
    parent: iridium_shield,
    image: "img/tungsten_shield.png",
    HTMLclass: "shield",

    link: {
        href: "tree/tungsten.html"
    }
}

invis1 = {
    parent: titanium_shield,
    image: "img/invis1.png",
    HTMLclass: "speed",

    link: {
        href: "tree/invis1.html"
    }
}

invis2 = {
    parent: invis1,
    image: "img/invis2.png",
    HTMLclass: "speed",

    link: {
        href: "tree/invis2.html"
    }
}

invis3 = {
    parent: invis2,
    image: "img/invis3.png",
    HTMLclass: "speed",
    
    link: {
        href: "tree/invis3.html"
    }
}


turtle_laser = {
    parent: laser,
    image: "img/turtle.png",
    HTMLclass: "speed",

    link: {
        href: "tree/turtle.html"
    }
}

triple = {
    parent: laser,
    image: "img/triple.png",
    HTMLclass: "speed",

    link: {
        href: "tree/triple.html"
    }
}

rabbit_laser = {
    parent: turtle_laser,
    image: "img/rabbit.png",
    HTMLclass: "speed",

    link: {
        href: "tree/rabbit.html"
    }
}

cheetah_laser = {
    parent: rabbit_laser,
    image: "img/cheetah1.png",
    HTMLclass: "speed",

    link: {
        href: "tree/cheetah.html"
    }
}

eagle_laser = {
    parent: cheetah_laser,
    image: "img/eagle.png",
    HTMLclass: "speed",

    link: {
        href: "tree/eagle.html"
    }
}


time1 = {
    parent: nav,
    image: "img/time1.png",
    HTMLclass: "nav",

    link: {
        href: "tree/time1.html"
    }
}

time2 = {
    parent: time1,
    image: "img/time2.png",
    HTMLclass: "nav",

    link: {
        href: "tree/time2.html"
    }
}

time3 = {
    parent: time2,
    image: "img/time3.png",
    HTMLclass: "nav",

    link: {
        href: "tree/time3.html"
    }
}

max = {
    parent: time3,
    image: "img/max.png",
    HTMLclass: "nav",

    link: {
        href: "tree/max.html"
    }
}

layer2 = {
    parent: nav,
    image: "img/layer2.png",
    HTMLclass: "nav",

    link: {
        href: "tree/layer2.html"
    }
}

layer3 = {
    parent: layer2,
    image: "img/layer3.png",
    HTMLclass: "nav",

    link: {
        href: "tree/layer3.html"
    }
}

layer4 = {
    parent: layer3,
    image: "img/layer4.png",
    HTMLclass: "nav",

    link: {
        href: "tree/layer4.html"
    }
}

layer5 = {
    parent: layer4,
    image: "img/layer5.png",
    HTMLclass: "nav",

    link: {
        href: "tree/layer5.html"
    }
}

chart_config = [config, basic, extraction, hull, laser, nav,

    bronze_machine, silver_machine, gold_machine, diamond_machine, bless1, bless2, bless3, bless4, charm1, charm2, charm3, charm4,

    titanium_shield, osmium_shield, iridium_shield, tungsten_shield,

    turtle_laser, rabbit_laser, cheetah_laser, eagle_laser,

    invis1, invis2, invis3, triple, time1, time2, time3, max, layer2, layer3, layer4, layer5];










