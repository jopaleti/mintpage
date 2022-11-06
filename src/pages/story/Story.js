import React from "react";
import {
	arrow,
	but,
	faq,
	faqover,
	fing,
	hand,
	mouse,
	speaker,
	spear,
	star,
} from "../../assets";
import Layout from "../../components/layout/Layout";
import "./story.scss";

function Story() {
	// const [touchStart, setTouchStart] = useState(null);
	// const [touchEnd, setTouchEnd] = useState(null);
	// const stor1 = useRef();
	// const stor2 = useRef();
	// const stor3 = useRef();

	// the required distance between touchStart and touchEnd to be detected as a swipe
	// const minSwipeDistance = 0;

	// const onTouchStart = (e) => {
	// 	setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
	// 	setTouchStart(e.targetTouches[0].clientY);
	// };

	// const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

	// const onTouchEnd = () => {
	// 	if (!touchStart || !touchEnd) return;
	// 	const distance = touchStart - touchEnd;
	// 	const isLeftSwipe = distance > minSwipeDistance;
	// 	const isRightSwipe = distance < -minSwipeDistance;
	// 	if (isLeftSwipe) {
	// 		console.log("swipe", isLeftSwipe ? "TOP" : "BOTTOM");
	// 		stor1.current.style.display = "none";
	// 		stor2.current.style.display = "block";
	// 	} else {
	// 		console.log("swipe", isRightSwipe ? "TOP" : "BOTTOM");
	// 		stor1.current.style.display = "none";
	// 		stor2.current.style.display = "block";
	// 	}
	// 	// add your conditional logic here
	// };
	return (
		<div className="story">
			<Layout background={faq} overlay={faqover}>
				<div className="pb-26">
					<div className="story-container flex-wrap flex justify-between items-center">
						<div className="story-left">
							<p>1/10</p>
							<div className="story-left-cont">
								<div className="store-div">
									<div className="flex justify-between items-center story-aud">
										<h1 className="text-white">Story</h1>

										<div className="flexy  flex items-center gap-3 py-1 px-4">
											<h3>Hear the Story</h3>
											<img src={speaker} alt="img.jpg" />
										</div>
									</div>
									<div className="mt-4 flex items-center justify-between story-arr">
										<div className="flex-left">
											<img src={arrow} alt="img.jpg" className="w-full" />
										</div>
										<div className="flex-right">
											<div>
												<div className="flex items-center justify-between story-arr-inn">
													<h2>Origin story of the beings</h2>
													<div className="flex items-center justify-between">
														<img src={star} alt="img.jpg" />
														<img src={star} alt="img.jpg" />
														<img src={star} alt="img.jpg" />
														<img src={star} alt="img.jpg" />
														<img src={star} alt="img.jpg" />
													</div>
												</div>
												<p className="mt-4">
													The heavens were filled with deities, demi-gods,
													creatures and even mortals who claimed to be among the
													strongest, fastest, and smartest warriors in
													existence. Yet no one had ever truly been able to
													reinforce those claims with fact. After all, how could
													you label yourself as the best without facing and
													defeating your challengers? While Zeus knew himself to
													be the most powerful god in the world, he was keen to
													find out who his next challenger would be. After all,
													it was he who had overthrown his own father to steal
													the crown. A clever ruler knows the direction of his
													next opponent, even if they happen to be sneaking up
													from behind. So Zeus sent a challenge out across the
													clouds, challenging only the bravest and most fearsome
													beings to engage in his contest of battle and
													scavenging. Out of hundreds of gods and creatures,
													only seven returned the call. Seven warriors set to
													face off in an unrelenting battle across thousands of
													miles and hundreds of years, all for the entertainment
													and information of the King of the Gods himself. And
													upon reading his list of pretenders, Zeus could not
													help but be surprised… impressed even, by some of
													their credentials. This was going to be even more fun
													than he thought. Medusa was once a beautiful mortal
													but was turned into a monster by Athena following a
													risky love affair with Poseidon. Her wonderful locks
													turned to hissing snakes, and her mysterious eyes that
													once lured in even the most strong-willed of men, were
													cursed to turn people to stone forever. They had made
													her a beast… a monster… it was about time Medusa
													started acting like one. “Perhaps it is time to find
													out whether I am the cursed soul, or whether the
													cursed are simply the ones who get in my way…”
													Poseidon was the brother of Zeus and the god of the
													seas in his own right. To refuse the call of his own
													flesh and blood would have been to make a mockery of
													Zeus before the competition had even begun. After all,
													Poseidon was not one to be outdone by a former lover,
													and he had always been tempted to see if he could
													defeat the curse placed upon the beautiful Medusa.
													“Well, well, well, brother. If it’s a challenge you
													propose, I shall make a mockery of your so-called
													competition…” Hercules was a hero in the world of
													Greek gods. After completing the infamous 12 labours,
													he could hardly turn down a challenge from his own
													father, Zeus. Hercules had a reputation of being among
													the fastest and strongest beings in the world, but a
													contest to cement that title appealed to him no end,
													especially as it gave him a chance to prove himself to
													his father once and for all. “I could never turn down
													a challenge from my own father. I just hope to do him
													proud…” Tartarus was the Greek Primordial God of the
													Underworld Pit. He was used as a prison and a dungeon
													of torment to hold the enemies of the Titans. Only the
													most wicked were able to pass through to Tartarus, who
													lurked below even Hades at the depths of the known
													world. Taking human form, Tartarus was excited to
													bring his unique and punishing skillset to Zeus’
													competition and he dreamed of writing his name in the
													legacy of Greek torture. “If the gods won’t come to
													Tartarus’ prison, then I shall bring the prison to
													them…” Minotaur liked to keep himself locked away from
													the wider world, a habit born from his time in the
													Labyrinth, a cage in which he was trapped for
													centuries. However, once he heard of Poseidon’s
													involvement in the contest, Minotaur answered Zeus’
													call in a heartbeat. For it was Poseidon who had
													kickstarted Minotaur’s chain of misery in the first
													place. Poseidon sent the god Minos a snow-white bull
													to sacrifice, but when he chose to keep it alive,
													Zeus’s brother made Minos’ wife, Pasiphae, fall in
													love with it. The child born to Pasiphae and the bull
													was locked away in the Labyrinth, but Minotaur was
													finally ready for revenge. “I have been chained my
													entire life, but it’s time for me to break free once
													and for all…” Cyclops was the last surviving son of
													Uranus and Gaea, who forged the thunderbolts for Zeus
													himself. There were many stories of the cyclops
													throughout history, some of which depicted him as a
													one-eyed giant cannibal. Perhaps it was about time to
													prove them wrong… or right… Cyclops still hadn’t
													decided on that particular detail when he answered the
													call. “Fear me or celebrate me… I no longer care…”
													Hippolyta was one of the most famous female warriors
													in Greek history and had recently ascended to the
													title of Queen of the Amazons. Her father was Ares,
													the Olympian god of war. Her mother was Otrera, the
													former Queen of the Amazons. As only her father was
													seen as a god, Hippolyta was only granted the status
													of a demi-god, which made her ineligible to sit on
													Mount Olympus with the other Greek deities. Presented
													with a chance to prove her strength and legacy,
													Hippolyta could not have looked herself in the mirror
													had she rejected Zeus’ call. “In the name of my mother
													and father, I shall defeat whatever Zeus puts in front
													of me…” And so Zeus had his champions. Seven strong
													warriors with unique traits and abilities, all signed
													up to battle for the entertainment of the Greek deity
													and the wider kingdom. Zeus announced that he would
													set up battles and scavenging missions that would take
													the seven contestants across the world, from Athens to
													Olympic Crete, and even to the depths of Tartarus.
													Some would bleed, and others would fall, but in the
													end, there would be one winner – able to label
													themselves Zeus’ Champion. But who would it be?
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="story-right flex flex-wrap gap-4 items-center">
							<img src={arrow} alt="img.jpg" />
							<img src={hand} alt="img.jpg" />
							<img src={but} alt="img.jpg" />
							<img src={spear} alt="img.jpg" />
						</div>
					</div>
					<div className="scroll flex flex-col items-center justify-center">
						<div>
							<img src={mouse} alt="img.jpg" className="lap" />
							<img src={fing} alt="img.jpg" className="tab" />
						</div>
						<h2>
							Scroll Down to
							<br /> read more
						</h2>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Story;
