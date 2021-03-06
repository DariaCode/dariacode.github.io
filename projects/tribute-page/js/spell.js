/* ----------------------------------------------------
NaMe: Tribute page
Updated: 02/05/2020
Author: Daria Vodzinskaia
Website: www.dariacode.dev
-------------------------------------------------------  */

let spells = [
  'Aberto:<br> unlocks a door; <br> first seen in Fantastic Beasts (the movie)',
  'Accio:<br> Summoning Charm; <br> used to summon objects toward the caster (usually from a long distance)',
  'Aguamenti:<br> produces a jet of water from the caster’s wand',
  'Alohomora:<br> used to unlock and open doors',
  'Avada Kedavra:<br> the Killing Curse; <br> causes a green flash of light; <br> Harry Potter is the only known survivor of this curse; <br> one of three Unforgivable Curses banned by the Ministry of Magic',
  'Bat-Bogey Hex:<br>causes the victim’s bogies to enlarge, grow wings, and attack the victim',
  'Bubble-Head Charm:<br> creates a bubble of air around the caster’s head and mouth, acting as a breathing apparatus',
  'Caterwauling Charm:<br> causes a loud, high-pitched shrieking noise when encountered',
  'Cheering Charm:<br> causes the person upon whom the spell has been cast to become happy and content',
  'Colloportus:<br> used to magically lock a door and prevent it from being opened by non-magical means',
  'Confringo:<br> Blasting Charm; <br> causes items the charm comes in contact with to burst into flames',
  'Confundo:<br> Confundus Charm; <br> causes the victim to become confused and disoriented',
  'Crucio:<br> causes the victim extreme pain; <br> one of three Unforgivable Curses banned by the Ministry of Magic',
  'Descendo:<br> causes the target object to move downward',
  'Diffindo:<br> Severing Charm; <br> causes the targeted object to rip or tear',
  'Disillusionment Charm:<br> hides objects and humans',
  'Engorgio:<br> Engorgement Charm; <br> causes objects to increase in size',
  'Episkey:<br> used to heal minor injuries',
  'Evanesco:<br> used to vanish objects',
  'Expecto Patronum:<br> used to cast a Patronus (a physical manifestation of one’s most positive feelings), which guards against dementors and can be used for communications',
  'Expelliarmus:<br> used to disarm another wizard',
  'Finestra:<br> shatters glass; first appears in Fantastic Beasts',
  'Homenum Revelio:<br> allows the caster to detect human presence',
  'Impedimenta:<br> Impediment Jinx; <br> prevents the victim from approaching the caster (by knocking back, tripping, etc.)',
  'Imperio:<br> removes the victim’s free will and ability to make decisions for him- or herself; <br> one of three Unforgivable Curses banned by the Ministry of Magic',
  'Impervius:<br> causes objects to repel outside forces, such as water',
  'Incendio:<br> creates fire',
  'Levicorpus:<br> a nonverbal spell that causes the victim to be dangled upside down by his or her ankles',
  'Liberacorpus:<br> the nonverbal countercurse to Levicorpus',
  'Locomotor:<br> causes an object to rise and move at the command of the caster',
  'Lumos:<br> projects a beam of light from the user’s wand',
  'Morsmordre:<br> conjures the Dark Mark',
  'Muffliato:<br> used to prevent conversations from being overheard by filling the ears of those nearby with an unidentifiable buzzing noise',
  'Nox:<br> puts out wand light',
  'Obliviate:<br> used to hide memories',
  'Permanent Sticking Charm:<br> causes objects to permanently stay in place',
  'Petrificus Totalus:<br> Full Body-Bind Curse; <br> temporarily binds the victim’s entire body, thus immobilizing him or her',
  'Portus:<br> turns objects into Portkeys',
  'Priori Incantato:<br> creates an “echo” of previously performed spells',
  'Protego:<br> Shield Charm; <br> rebounds minor to moderate hexes, jinxes, and spells upon their caster',
  'Reducto:<br> Reductor Curse; <br> breaks objects and in its strongest form has the ability to disintegrate them',
  'Rennervate:<br> revives the victim of a Stunning Spell',
  'Relashio:<br> causes the victim to release whatever they are holding',
  'Rennervate:<br> revives someone who has been Stunned',
  'Reparo:<br> used to repair broken objects',
  'Revelio:<br> a Revealing Spell; <br> first used in the Fantastic Beasts film to reveal Graves is Grindelwald',
  'Rictusempra:<br> Tickling Charm; causes an extreme tickling sensation that disables the victim',
  'Riddikulus:<br> spell used when fighting a Boggart; causes the Boggart to transform into something the caster finds humorous',
  'Scourgify:<br> used to clean objects',
  'Sectumsempra:<br> spell that causes deep gashes on the victim’s body',
  'Silencio:<br> used to make something silent',
  'Sonorus:<br> magically magnifies one’s voice',
  'Stupefy:<br> used to stun a victim',
  'Taboo:<br> a jinx that can be placed upon a word so that when the word is spoken, a magical disturbance is created which alerts the caster of the Taboo',
  'Tergeo:<br> used to remove matter (blood, dirt, etc.) from an object',
  'Unbreakable Vow:<br> causes the vow being taken by the witch or wizard to be inviolable with the consequence of death if it is breeched',
  'Wingardium Leviosa:<br> Hover Charm; <br> causes an object to levitate'
  ];
  
  const updateSpell = () => {
    document.getElementById("spellDisplay").innerHTML = spells[Math.floor(Math.random() * spells.length)];
  }