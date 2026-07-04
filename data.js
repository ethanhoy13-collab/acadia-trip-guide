// ============================================================
// Trip data — Williamsport, PA → Acadia National Park, ME
// Road-tested by Ethan. Built for his friend + wife (July trip).
// ============================================================

const TRIP = {
  title: "The Long Way to Acadia",
  start: { name: "Williamsport, PA", coords: [-77.0011, 41.2412], routeIdx: 0 },
  months: "Best June–September · Built for your July trip",
};

// kind: 'visited' = Ethan did it (has photos) · 'bonus' = scouted recommendation
// pick: 'ethan' | 'guide'  (bonus stops only)
const STOPS = [
  {
    id: "taughannock", num: 1, kind: "visited",
    name: "Taughannock Falls",
    place: "Trumansburg, NY · Finger Lakes",
    coords: [-76.5947, 42.5445], routeIdx: 270,
    drive: "≈ 2 hr from Williamsport",
    tag: "A 215-foot free-fall — 33 feet taller than Niagara",
    story: "First stop, and Christian already knows it's a good one — he's the guy holding the brown trout from the plunge pool in the photos. (The bass at the lower falls was Ethan's, for the record.) Taughannock drops 215 feet in a single ribbon into a stone amphitheater — the tallest single-drop waterfall east of the Rockies — and the gorge trail to the base is flat, easy, and completely worth it. This time, Grace gets to see it.",
    tips: [
      "Do the Gorge Trail (¾ mile, flat) to the base — don't settle for the roadside overlook.",
      "Bring the rod again: brown trout at the main plunge pool, bass at the lower falls. Grab a NY day license online (dec.ny.gov) before you go.",
      "The lower falls are right by the park entrance on Rt 89 — easy to miss, don't.",
    ],
    photosKey: "01-taughannock-falls",
  },
  {
    id: "kaaterskill", num: 2, kind: "visited",
    name: "Kaaterskill Falls",
    place: "Haines Falls, NY · Catskills",
    coords: [-74.0555, 42.1964], routeIdx: 602,
    drive: "≈ 3 hr from Taughannock",
    tag: "New York's two-tier giant — 260 feet of falling water",
    story: "One of the oldest tourist attractions in America (the Hudson River School painters were obsessed with it), and it still delivers. Two stacked tiers dropping about 260 feet, with a ledge that lets you stand practically behind the upper veil. Ethan hit it on a misty day and had the amphitheater nearly to himself — the red rock, green moss, and spray feel almost tropical.",
    tips: [
      "Two ways in: Laurel House Rd (park at the top, stairs down to the middle) or the steeper climb up from Rt 23A past Bastion Falls. The top approach is easier on the knees.",
      "The rock is genuinely slick — wear shoes with grip and stay on the marked trail (people get hurt here every year going off it).",
      "An overcast or misty day is a feature, not a bug: fewer crowds, better photos.",
    ],
    photosKey: "02-kaaterskill-falls",
  },
  {
    id: "splitrock", num: 3, kind: "visited",
    name: "Split Rock Falls",
    place: "New Russia, NY · Adirondacks",
    coords: [-73.6120, 44.1735], routeIdx: 949,
    drive: "≈ 2.5 hr from Kaaterskill",
    tag: "The Adirondacks' classic emerald swimming hole",
    story: "A roadside gem on the Boquet River: tiered cascades pouring through split granite into pools so clear they glow green. This was an evening stop for Ethan — sunset sky reflecting in the rock pools — and it's exactly the kind of place you plan 20 minutes for and stay 2 hours. Pack the suits.",
    tips: [
      "Free pull-off right on US-9 — the falls are steps from the car. Zero hike, maximum payoff.",
      "Swimsuits mandatory (to pack, that is). The pools are cold, deep, and perfect on a hot July day.",
      "Golden hour here is special — if it fits the schedule, make it a late-day stop like Ethan did.",
    ],
    photosKey: "03-split-rock-falls",
  },
  {
    id: "whiteface", num: 4, kind: "visited",
    name: "Whiteface Mountain",
    place: "Wilmington, NY · Adirondacks",
    coords: [-73.9026, 44.3659], routeIdx: 1055,
    drive: "≈ 40 min from Split Rock",
    tag: "4,867 feet — drive nearly to the top of New York's 5th-highest peak",
    story: "The summit sign photo everyone wants, with Lake Placid glittering below and the High Peaks rolling to the horizon. Whiteface is the rare big mountain with a road up it — Ethan drove the Veterans' Memorial Highway to the top, where it ends at a stone castle with a short ridge walk (or an elevator carved through the rock) to the summit. He scored a flawless bluebird morning; get there early and you might too.",
    tips: [
      "The Veterans' Memorial Highway is a toll road (per car + driver) — check hours; morning light is best and beats the crowds.",
      "It's 15–20°F colder and windier up top than in Wilmington. Bring a layer even in July.",
      "The castle café at the summit is a fun stop; the elevator tunnel through the mountain is worth doing once.",
    ],
    photosKey: "04-whiteface-mountain",
  },
  {
    id: "ausable", num: 5, kind: "visited",
    name: "Ausable Chasm",
    place: "Keeseville, NY",
    coords: [-73.4623, 44.5253], routeIdx: 1147,
    drive: "≈ 30 min from Whiteface",
    tag: "The 'Grand Canyon of the Adirondacks'",
    story: "Rainbow Falls thundering into a 500-million-year-old sandstone gorge, with a historic stone pumphouse perched in the middle of the river. It's the last New York stop before the long eastward run — and the best free view in the region is right from the Route 9 bridge, which is exactly where Ethan shot it.",
    tips: [
      "The bridge view is free and fantastic. If you have 2+ hours, the paid chasm walk (and the raft/tube float through the gorge) is a great add.",
      "Morning mist off the falls makes for the best photos.",
      "Good coffee stop: you're 20 min from Plattsburgh before you cross toward Vermont.",
    ],
    photosKey: "05-ausable-chasm",
  },
  {
    id: "cadillac", num: 6, kind: "visited",
    name: "Cadillac Mountain",
    place: "Acadia National Park, ME",
    coords: [-68.2247, 44.3528], routeIdx: 2233,
    drive: "You made it — MDI at last",
    tag: "1,530 ft — the highest point on America's Atlantic coast",
    story: "The destination. Pink granite slabs sliding down to Frenchman Bay, the Porcupine Islands scattered below like stepping stones, and the open Atlantic beyond. For much of the year this is the first place in the United States to see the sunrise. Ethan drove the summit road up — views the entire way — and his photos from the top (someone sitting quietly on the ledge, sun flaring over the slabs) are the whole reason this trip exists.",
    tips: [
      "CRITICAL for summer: driving the summit road requires a timed vehicle reservation from recreation.gov (sunrise slots sell out fast — book the moment your dates are set).",
      "Sunrise is the move, but sunset is criminally underrated and easier to book.",
      "The short Summit Loop paths give you every view without a real hike.",
    ],
    photosKey: "06-cadillac-mountain",
  },
  {
    id: "barharbor", num: 7, kind: "visited",
    name: "Bar Harbor",
    place: "Mount Desert Island, ME",
    coords: [-68.2043, 44.3915], routeIdx: 2201,
    drive: "10 min from Cadillac",
    tag: "Your Acadia basecamp — harbor, lawn, lobster",
    story: "The town that makes Acadia easy. Kayaks crossing the harbor, the green sweep of Agamont Park above the town pier, ice cream in hand, islands on the horizon. Ethan's first Maine lobster roll came from a famous little takeout spot right in town — eaten in the sun at Agamont Park with a bag of Fox Family chips, the official Maine lunch. Follow your nose; the good spots announce themselves.",
    tips: [
      "Park once (the Bridge St / West St area) and walk everything — the town is compact.",
      "Agamont Park benches = best free view in town. Bring the lobster roll here.",
      "The Shore Path from the pier along the water is a perfect 30-minute evening stroll.",
    ],
    photosKey: "07-bar-harbor",
  },
  {
    id: "thunderhole", num: 8, kind: "visited",
    name: "Thunder Hole",
    place: "Park Loop Road, Acadia",
    coords: [-68.1885, 44.3204], routeIdx: 2287,
    drive: "15 min from Bar Harbor on Ocean Drive",
    tag: "When the swell is right, the ocean explodes",
    story: "A wave-carved slot in the pink granite that booms like thunder when a swell rolls in — and on the right day, detonates clear over the viewing railings. Ethan caught it going full send (see the photo — that's not spray, that's the whole ocean). Most people see a gurgle; time it right and you'll see a cannon.",
    tips: [
      "Timing is everything: go 1–2 hours BEFORE high tide, ideally with a swell running. Check the Bar Harbor tide chart.",
      "You will get wet on the lower platform if it's going off. Protect the phone.",
      "You're on the best stretch of Park Loop Road — Sand Beach and Otter Cliff are minutes away on either side.",
    ],
    photosKey: "08-thunder-hole",
  },
  {
    id: "lobsterpound", num: 9, kind: "visited",
    name: "Bar Harbor Lobster Pound",
    place: "414 ME-3, Bar Harbor · barharborlobsterpound.com",
    coords: [-68.2790, 44.4237], routeIdx: 2178,
    drive: "On Route 3, just before town",
    tag: "Ethan's verdict: best lobster roll AND best ice cream of the trip",
    story: "Red picnic tables under the pines, cornhole between courses, lobster straight from local boats — and dessert from an actual boat: The Ice Cream Boat, a converted hull parked out front. Ethan and his crew crowned this the single best food stop of the entire 1,000 miles. Order the lobster roll with butter, then walk 30 feet and get a scoop. Do not skip.",
    tips: [
      "The lobster roll with the warm butter cup is the order. Lobster tacos are the sleeper hit.",
      "The Ice Cream Boat's blueberry scoop = Maine in a cup.",
      "Casual and outdoors — perfect straight-off-the-trail stop on your way into or out of town.",
    ],
    photosKey: "09-bar-harbor-lobster-pound",
  },
  {
    id: "barisland", num: 10, kind: "visited",
    name: "Bar Island Land Bridge",
    place: "Bridge St, Bar Harbor · walkable only at low tide",
    coords: [-68.2075, 44.3925], routeIdx: 2201,
    drive: "Walk from downtown Bar Harbor",
    tag: "Walk the ocean floor — then find the starfish",
    story: "Twice a day the sea pulls back and a gravel bar rises out of Frenchman Bay, connecting downtown Bar Harbor to a wild island. For about three hours you can walk across the ocean floor — tide pools everywhere, periwinkles and crabs underfoot, gulls working the flats. This is your starfish mission, and below is exactly how to win it.",
    tips: [
      "THE RULE: the bar is walkable ~1.5 hrs either side of low tide. Check the Bar Harbor tide chart and build your day around it.",
      "SET A PHONE ALARM for when the tide turns. People get stranded on Bar Island every summer (3–4 hr wait or a pricey boat ride back). Cars parked on the bar get swallowed.",
      "Bonus: the 20-min walk up Bar Island's summit gives you the classic photo of Bar Harbor with Cadillac rising behind it.",
    ],
    starfishGuide: [
      "Hunt the last hour of the falling tide, right at the water's edge — sea stars stay low, near the waterline.",
      "Look UNDER things: gently lift the rockweed curtains and peek at the shaded sides of rocks and ledges. Stars hide from sun and gulls.",
      "Find the mussel beds — sea stars eat mussels. Where mussels cluster, stars follow.",
      "Scan clear, still pools for orange and purple star shapes on the bottom.",
      "Wet your hands first, keep them underwater to look, and put every rock back the way you found it. Photos yes, souvenirs no — they don't survive the ride home.",
    ],
    photosKey: "10-bar-island",
  },
];

const BONUS = [
  {
    id: "watkinsglen", pick: "ethan",
    name: "Watkins Glen State Park",
    place: "Watkins Glen, NY · Finger Lakes",
    coords: [-76.8710, 42.3760], routeIdx: 270,
    tag: "19 waterfalls in 2 miles — pair it with Taughannock, same day",
    pics: [
      {f:"media/online/watkins-2.jpg", credit:"Rainbow Falls — Wikimedia Commons · CC BY 2.0"},
      {f:"media/online/watkins-1.jpg", credit:"Wikimedia Commons · CC BY-SA 4.0"},
    ],
    desc: "Thirty minutes from Taughannock on the other side of Seneca Lake, and it might be the most gorgeous two miles in the East: the Gorge Trail ducks under waterfalls, over stone bridges, and up spray-slicked staircases carved in the 1930s, past 19 falls stacked one after another. You literally walk behind Rainbow Falls. Do Taughannock and this back-to-back on day one and the trip opens with a knockout.",
    tips: ["Go at opening (usually 9am) or after 4pm — midday in July is shoulder-to-shoulder.", "Walk UP the gorge from the main (lower) entrance so the views unfold in front of you — 832 stone steps, take your time.", "The stone is always wet — grippy shoes, and keep phones zipped up under the falls."],
  },
  {
    id: "indianhead", pick: "ethan",
    name: "Indian Head Overlook",
    place: "St. Huberts (Keene Valley), NY · Adirondacks",
    coords: [-73.7885, 44.0873], routeIdx: 949,
    tag: "The ledge over Lower Ausable Lake — the Adirondacks' best view",
    pics: [
      {f:"media/online/indianhead-1.jpg", credit:"Flickr · CC BY"},
      {f:"media/online/indianhead-2.jpg", credit:"Lower Ausable Lake from the ledge — Flickr · CC BY-SA"},
    ],
    desc: "A bare granite ledge hanging a thousand feet over Lower Ausable Lake, with the fjord-like valley running to the horizon — the photo that makes people move to the Adirondacks. It's a 10–11 mile round trip, but most of it is a flat walk up the private Lake Road; the real climbing is packed into the last stretch. Fifteen minutes from Split Rock Falls, so a big-hike day pairs naturally with a swim after.",
    tips: ["IMPORTANT: access is through the Adirondack Mountain Reserve (AMR) and May–Oct requires a FREE timed parking reservation from hikeamr.org — book it when you book Cadillac.", "No dogs, no bikes on AMR land — their rules, firmly enforced.", "Start early (gate-side lot fills), bring more water than you think, and eat lunch on the ledge."],
  },
  {
    id: "basin", pick: "ethan",
    name: "The Basin",
    place: "Franconia Notch State Park, Lincoln, NH",
    coords: [-71.6815, 44.1219], routeIdx: 1506,
    tag: "A glacier-carved granite whirlpool, 30 seconds from the car",
    pics: [
      {f:"media/online/franconia-basin-2.jpg", credit:"Wikimedia Commons · CC BY-SA 4.0"},
      {f:"media/online/franconia-basin-1.jpg", credit:"Wikimedia Commons · CC BY-SA 4.0"},
    ],
    desc: "A 30-foot granite pothole polished into a perfect bowl by 25,000 years of swirling meltwater, glowing green under the falls that feed it. It's right off I-93 in Franconia Notch and the walk from the lot takes less time than parking did — the easiest wow of the whole drive east. Thoreau called it 'perhaps the most remarkable curiosity of its kind in New England,' and he wasn't wrong.",
    tips: ["Free parking, paved path, 5 minutes — zero excuse to skip it.", "No swimming in the Basin itself, but it's the front door to the swimming holes just up the trail (next card)."],
  },
  {
    id: "franconia", pick: "ethan",
    name: "Infinity Pool & Georgiana Falls",
    place: "Basin-Cascades Trail, Lincoln, NH",
    coords: [-71.6905, 44.1120], routeIdx: 1506,
    tag: "The granite hot-tub ledge staring straight down Franconia Notch",
    pics: [
      {f:"media/online/infinitypool-1.jpg", credit:"Frame from the scouting video — this is the spot"},
    ],
    desc: "From The Basin, the Basin-Cascades Trail climbs about a mile past Kinsman Falls to the famous 'infinity pool' — a natural tub on a granite ledge with the whole notch and highway laid out below your toes. This is the pool from the video Ethan sent; this is the spot. Ten minutes south, Georgiana Falls is the quiet-crowd alternative: a 2-mile round trip to falls with swimmable pools at the base. Together with The Basin, this is THE swim day of the drive east.",
    tips: ["Go early — the infinity pool is TikTok-famous now and holds about four people.", "Georgiana Falls trailhead is off Hanson Farm Rd — small lot, easy grade.", "Wet granite is slick granite: watch your footing near every edge."],
  },
  {
    id: "kancamagus", pick: "guide",
    name: "Kancamagus Highway",
    place: "NH-112, Lincoln → Conway",
    coords: [-71.3966, 43.9954], routeIdx: 1601,
    tag: "34 miles of the best mountain road in the East",
    pics: [
      {f:"media/online/kancamagus-1.jpg", credit:"Wikimedia Commons · CC BY-SA 4.0"},
      {f:"media/online/kancamagus-sabbaday.jpg", credit:"Sabbaday Falls — Wikimedia Commons · CC BY 2.0"},
    ],
    desc: "It's literally on your way from Franconia Notch toward Maine, and it's stacked with exactly your kind of stops: Sabbaday Falls (an easy ¾-mile boardwalk to a flume-squeezed waterfall), Lower Falls (roadside swimming in the Swift River), and Rocky Gorge. Scenic overlooks the whole way.",
    tips: ["No gas stations for 34 miles — fill up in Lincoln.", "Lower Falls on a hot afternoon is the perfect driving break: park, swim, keep going."],
  },
  {
    id: "rattlesnake", pick: "ethan",
    name: "Rattlesnake Pool",
    place: "Stone House Trail, Stow, ME · Evans Notch",
    coords: [-70.9840, 44.2455], routeIdx: 1726,
    tag: "The emerald pool from the videos — it's real",
    pics: [
      {f:"media/online/rattlesnake-1.jpg", credit:"Frame from the scouting video that put it on the list"},
    ],
    desc: "An 18-foot-deep, impossibly green pool below a small cascade, tucked a mile up an easy trail in Evans Notch (that 'paradise in New Hampshire' video is actually just over the Maine line). 2.5 miles round trip, mostly flat. It sits on private land the owners generously keep open — treat it accordingly.",
    tips: ["From Rt 113 take Stone House Rd, park at the gate on Shell Pond Rd, walk in.", "No cell service in Evans Notch — download offline maps first.", "More photos on <a href='https://www.alltrails.com/trail/us/maine/rattlesnake-pool' target='_blank' rel='noopener'>AllTrails</a>. It looks fake. It isn't.","Pack out everything; this stays open only because people behave."],
  },
  {
    id: "mtbattie", pick: "guide",
    name: "Mount Battie",
    place: "Camden Hills State Park, Camden, ME",
    coords: [-69.0648, 44.2340], routeIdx: 2019,
    tag: "The Whiteface of the Maine coast — drive up, jaw drops",
    pics: [
      {f:"media/online/mtbattie-1.jpg", credit:"Camden Harbor from Mount Battie — Wikimedia Commons · CC BY-SA 3.0"},
      {f:"media/online/mtbattie-2.jpg", credit:"Wikimedia Commons · CC BY-SA 3.0"},
    ],
    desc: "You loved a drive-up summit in the Adirondacks; here's its coastal twin, right on your Route 1 run to Acadia. A short toll road (or a steep 1-mile hike) tops out over Camden's harbor and the full sweep of Penobscot Bay — climb the stone tower for the 360. Camden below is the prettiest harbor town on the route and a perfect leg-stretch.",
    tips: ["Small state-park fee; the tower view beats the parking-lot view — walk the last 100 yards.", "Pair it with a stroll down to Camden's waterfront 5 minutes away."],
  },
  {
    id: "beehive", pick: "ethan",
    name: "The Beehive Trail",
    place: "Sand Beach, Acadia National Park, ME",
    coords: [-68.1851, 44.3240], routeIdx: 2287,
    tag: "Acadia's famous iron-rung climb — and the spine of your perfect day",
    pics: [
      {f:"media/online/beehive-rungs.jpg", credit:"Wikimedia Commons · CC BY 2.0"},
      {f:"media/online/beehive-1.jpg", credit:"Wikimedia Commons · CC BY 2.0"},
    ],
    desc: "A 450-foot granite dome climbed via iron rungs and ladders bolted into the cliff face, with Sand Beach glowing below the whole way up. It's short (about 1.5 miles), thrilling, and the single most memorable hike in the park. THE PERFECT ACADIA DAY: Cadillac for sunrise → Beehive by 8am while it's cool and quiet → swim it off at Sand Beach right below → Thunder Hole on the rising tide → lobster roll at the Pound → Jordan Pond loop with popovers → Bar Island at evening low tide. That's the whole park in one unforgettable day.",
    tips: ["One-way UP only — you descend the gentle Bowl Trail around the back. Never climb down the rungs.", "Skip it if it's wet or if either of you is genuinely afraid of heights (the exposure is real); the Bowl Trail still gets you the summit.", "Park at the Sand Beach lot early or take the free Island Explorer shuttle."],
  },
  {
    id: "ravensnest", pick: "ethan",
    name: "Raven's Nest",
    place: "Schoodic Peninsula, Acadia · Winter Harbor, ME",
    coords: [-68.0846, 44.3437], routeIdx: 2287,
    tag: "Acadia's secret cliffs — no crowds, all drama",
    pics: [
      {f:"media/online/ravensnest-1.jpg", credit:"Wikimedia Commons · CC BY 4.0"},
    ],
    desc: "The Schoodic Peninsula is the Acadia most visitors never see — same pink granite, a fraction of the people — and Raven's Nest is its show-stopper: sheer cliffs dropping into a churning cove, waves detonating against the rock below your feet. It's an unmarked viewpoint off the one-way Schoodic Loop Road, which is exactly why it stays quiet. Worth the drive around Frenchman Bay (about 1 hr 10 from Bar Harbor) on a day the island feels busy.",
    tips: ["Unmarked but easy: on the loop road ~1 mile past Frazer Point, look for the small pull-offs and the short path west to the cliffs.", "No railings at all — keep well back from the edge, especially in wind or spray.", "Make a half-day of it: Schoodic Point, Blueberry Hill, and the loop road are all right there."],
  },
];

const EATS = [
  {
    name: "Bar Harbor Lobster Pound", place: "414 ME-3, Bar Harbor",
    coords: [-68.2790, 44.4237],
    badge: "Ethan-tested · Best of trip",
    pics: [{f:"media/09-bar-harbor-lobster-pound/IMG_4540.jpg", credit:"Ethan's own photo — the actual roll"}],
    desc: "The anchor meal. Best lobster roll and best ice cream of Ethan's entire trip — see Stop 9 for the full story. Picnic tables, cornhole, The Ice Cream Boat.",
    stopRef: "lobsterpound",
  },
  {
    name: "Jordan Pond House", place: "Park Loop Rd, Acadia",
    coords: [-68.2528, 44.3223],
    badge: "The experience",
    pics: [
      {f:"media/online/jph-popovers.jpg", credit:"The popovers themselves — Flickr · CC BY-NC-ND"},
      {f:"media/online/jordanpond-bubbles.jpg", credit:"The popover lawn, Jordan Pond &amp; the Bubbles — NARA · Public domain"},
    ],
    desc: "Popovers and strawberry jam on a lawn overlooking Jordan Pond and the Bubbles — an Acadia tradition since the 1890s and the only restaurant inside the park. Earn it first with the flat 3.3-mile pond loop, one of the prettiest easy walks in Maine.",
  },
  {
    name: "Red's Eats", place: "Route 1, Wiscasset, ME",
    coords: [-69.6656, 44.0026],
    badge: "On your route · Legendary",
    pics: [
      {f:"media/online/reds-eats-1.jpg", credit:"Wikimedia Commons · CC BY-SA 3.0"},
      {f:"media/online/reds-eats-roll.jpg", credit:"The famous roll — Wikimedia Commons · CC BY-SA 2.0"},
    ],
    desc: "The tiny red shack you'll drive right past on Route 1 — many say it's Maine's definitive lobster roll: a full lobster's worth of meat, drawn butter on the side. The line is part of the ritual; go at an off-hour and it moves fast.",
  },
  {
    name: "Side Street Café", place: "49 Rodick St, Bar Harbor",
    coords: [-68.2050, 44.3890],
    badge: "Dinner in town",
    pics: [
      {f:"media/online/sidestreet-1.jpg", credit:"Flickr · CC"},
      {f:"media/online/sidestreet-roll.jpg", credit:"Flickr · CC"},
    ],
    desc: "The reliable, buzzing Bar Harbor dinner: famous lobster mac & cheese, blueberry margaritas/sodas, and a casual vibe that doesn't need a reservation strategy — just show up early-ish.",
  },
];

const KNOW = [
  { icon: "⛰️", title: "Cadillac sunrise = reservation", body: "Vehicle reservations for the Cadillac Summit Road are required in season and sold on recreation.gov — most are released 90 days out, a chunk held back for 2 days before. Book the moment your dates are set." },
  { icon: "🎟️", title: "Acadia park pass", body: "$35/vehicle for a week, buy online (recreation.gov) or at Hulls Cove Visitor Center. Have it before you drive the Park Loop." },
  { icon: "🌊", title: "Live and die by the tide chart", body: "Two of your best stops — Bar Island and Thunder Hole — are tide-timed. Screenshot the Bar Harbor tide table for your dates on day one and plan around it." },
  { icon: "🎣", title: "Fishing licenses", body: "NY day licenses (Taughannock, Split Rock) are quick online buys at dec.ny.gov. Maine sells day licenses too if the starfish aren't enough." },
  { icon: "🩴", title: "Pack list difference-makers", body: "Water shoes (every swimming hole, plus Bar Island's barnacles), swimsuits somewhere grabbable, a warm layer for summits, and a headlamp if you're doing Cadillac sunrise." },
  { icon: "📵", title: "Offline maps", body: "Evans Notch (Rattlesnake Pool) and parts of the Kancamagus have zero cell service. Download offline maps for NH/ME before leaving Franconia." },
  { icon: "⏰", title: "July crowd math", body: "Everything on this route is best before 9am — parking at Kaaterskill, the Basin, Sand Beach, and Cadillac all fill. Early starts buy you empty trails and cool swims." },
];

const OUTRO = {
  message: "Christian, Grace — every pin on this map is either somewhere I stood or somewhere I'd bet on. Drive safe, chase the tide chart, and catch a fish for me.",
  signoff: "— Ethan",
};
