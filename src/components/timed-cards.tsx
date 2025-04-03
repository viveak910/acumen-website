import { useEffect, useRef, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import { gsap } from "gsap";
import RainingLetters from "./RainingLetters";

const data = [
  {
    place: "",
    title: "PAPER",
    title2: "AND POSTER",
    description:
      "Step into the spotlight and make your ideas stand out! Just like a visionary in a crowd, let your research, analysis, and creativity shine through. Whether it's groundbreaking concepts or innovative solutions, seize this opportunity to showcase your intellect and leave a mark at Acumen 2025!",
    image: "https://media-hosting.imagekit.io/be466b8771a9461b/1.jpg?Expires=1838302820&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KofTLzNwS2bgdDkhP6thmH24GU0XB7RTP6xU~eeyc-zBwmRS8KI9XGZpSQnWFLSNntpLG9xAGupcQLSZWMYZ6x8mlfAwGUviBIDCazva7ceQ0CK9w9TPS2Qh8BBHIu93YJJxjCgVLFy11E4BvY7kq-nDhhjpR5B282-lYKwr024eMRpPP4pynkg5cQzzbUp51JPi8GpBgeOLZw9gVWpVqPuMp2I2ig2dParmBJRTeuALcyP45H5fzEPXNT7Uj5XHX4ZYHst5ONFy1bzN6R0zNQGrgGgR3BRfgc76pOYej8No4oUsyruyshkeHJsnsTu39nVYF8fTRz-yQKenE4Gbuw__" },
  {
    place: "",
    title: "WEBATHON",
    title2: "",
    description:
      "Code. Create. Conquer. Step into the digital battleground and craft stunning websites that stand out in the online world. Whether it's functionality, aesthetics, or innovation—bring your best to the table and prove your web development prowess at Acumen 2025!",
    image: "https://media-hosting.imagekit.io/301e3c663512493a/2.jpg?Expires=1838302856&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=m0NKKqSnuXqY8BpuzqhyhPPE9wu~j58~ZSTI8vKJ7CL-7AbhYJ-uoaxElRSkeO07mfo0HO1Fgbfx8znb4JKAuZNOp2uMFiYePhehG5p3pQc0txHfawUN16jejU2iLgnzj1hu8gtUvNyPuuysvKIbgaLpYtlwpvH0rD7wErmwFRyNwz8OmNusQv1GfabdSEX52mPjaJ2t6K1ISJLOxYm4LNEqyg3uS59m49zsrCitYbQ-wgLNCv06n2BAPCYX2S6gHsbyE6BpGdWhXbTED4yLu8yorNOCGNqCIG2V9fBu6ZL3YCkaKwPCGgYTeFmI5TKwLnLLbDTOtGBk4dqoVOEnRw__" },
  {
    place: "",
    title: "PROJECT",
    title2: "EXPO",
    description:
      "Innovate. Exhibit. Inspire! Present your groundbreaking projects, showcase your creativity, and bring ideas to life. Whether it's tech-driven solutions or revolutionary concepts, let your innovation shine and compete for the title of the best project at Acumen 2025!",
    image: "https://media-hosting.imagekit.io/d15b7b618b874209/3.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Gp9nwMp5ewhDstiT3V8fZ85niJHSrxCI~I8kb7w-3FrkyPyx4rB1QUZceOaxHa-NZgD~ZtMqAsy64tQBRGdlezBBwBK~4zk6ZO1nsJ8lwKOd8VCPcHZ776rA9~ojqI1u-dYjETU~-FYN70O8IkMqgP8HdeQjC87m5tG4RblR51SNTHITXQBdNm3JeermJWfwSnLuv1F0gvce1O3kSvtqtEveJuXHSknr0dWi9sEyLOQ-tDPRQHR9m1ARCB2S14i3B0m79GYvVh~J3vhGc0zCK9RwQKRWGsgJwu1BR7mSDOMKGZWqtgaI73MCpKebTuUbC6ODpqiNsoOxC4vrwXlErQ__" },
  {
    place: "",
    title: "PHOTOGRAPHY",
    title2: "CHALLENGE",
    description:
      "Unleash your creativity in the Photography Challenge at Acumen 2025! Channel the passion of Farhan Qureshi from 3 Idiots as you capture moments that speak louder than words. Whether it's landscapes or candid shots, let your lens tell a story and showcase your artistic vision!",
    image: "https://media-hosting.imagekit.io/96cda7ec09df45c3/4.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZTb6RJ3F5h5gz3jcIQH7mRr8F4Nsx1VYmchRBu86Ez3QmMV4i971ipMhQpEsY5EITJ3weo8RPYYVQX4Ac~dT~Yz8TwlA0D1FWMoidDrqtEtXf9QbmVPxmBquveedVfJqtqa13N6EdN0pH7yPuN~KM5aP5EfC6TSlEXbKzfdbvH3gMVUuTtwv1Ac4FTtXOnVddBGEGPg5axhVkhOyyiSvMSZUUiE~HLyViOM37nmcvQmVlRPM2LAQxNGS5p0qhCt4PgbyQaszgwCgb-NaFNxtSIA0u1VBYzmMGV8HYt-jE24XXhFlMOkhUjIpJ8FO6NYgC2mzWbWh3XK8Q1wph4sdAQ__" },
  {
    place: "",
    title: "IPL",
    title2: "AUCTION",
    description:
      "Step into the electrifying world of cricket strategy with the Mock IPL Auction at Acumen 2025! Experience the thrill of bidding wars, team-building, and player selection as you manage budgets and assemble your dream squad. Channel your inner franchise owner and compete to create the ultimate lineup!",
    image: "https://media-hosting.imagekit.io/1c1505200e0d4533/5.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p1TdZV3MbGAmQGqIT4znJR1kPapoa1~hrHCTi2-34V6nWDFnTwGxmcBjAJdpaTUq0-8cFazoQODKhIlu45DVOL4-LYweEVgQ6WEKVvBVwre8l-wkpO94IFwZjuPyyF6ueNFrf1b2LCUixKiXBkUGB2hXZXfE2fXmhsQlDU4PhMGvg2D7wkrHIVA4EkW9nZPI9vl6hJotnNhB8dbn1OJiJV5ZY2rKmAf-uM-7wkYQ0m~L39d7lnTKgjLMNr3yW39gtLDIRINoTjV76N1Ws8xrbcNdfJKgT11yTbVJUWw5gxxyv14WQLNQNqEc8RTYqme~FSGWLBhrIwhsufv11XWJEw__" },
  {
    place: "",
    title: "BGMI",
    title2: "",
    description:
      "Join us for the electrifying BGMI Tournament at Acumen 2025! Dive into intense gameplay as teams of four battle it out in a series of thrilling matches across dynamic maps. Showcase your skills, employ strategic tactics, and compete for glory in a fast-paced environment that captures the essence of competitive gaming. Gather your squad and prepare for an unforgettable showdown!",
    image: "https://media-hosting.imagekit.io/efd47ccaa8df4458/6.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OiD3YdL3pLhncUeFZxu1fi6G3K6ZxnR4Mr56~viFMum9KhbWNQy8ADSZF08lqTmM5m2JNy8YVno-0OA0UtblfBtNom2B-hKvd72mM3n22j9OoWhSXrc6AETZ3G-yyjg4AlEKL-3nXkdDB-tX02mgNj5TZnYu9DS35i~xbXEXtz9Nys~MgIpBjfcFNnx6ZgFOKVd-ngpKAdTMT-DuBDMwaCM1AV9~I3VpA9eV~Qf62sKJL-JlOvczt3h5M44~5aLPQzp6bBAkm~XsX7RLPjYN1L6VaWdRGvZrLUn-ZRgzFkuBmf3nncb4cBFPXs2GnnsNZg3tMdViuLs9ViInTstVBw__" },
  {
    place: "",
    title: "DIGITAL",
    title2: "PING PONG",
    description:
      "Smash, spin, and score in the virtual arena! Experience the thrill of ping pong like never before as you test your reflexes in a fast-paced digital showdown. Get ready to rally your way to victory at Acumen 2025!",
    image: "https://media-hosting.imagekit.io/64743d3d0f904206/7.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tlFYnFyyVJzFq26vMYJc1ZghkU3DFNcLElHEFgajkM-7sHOOpr5IW1-jguZUQe0zxgBs-oVLBe9TWPL5aWRpVxe9Xbl-01Uee4QPGdyppZBYvKCIT~nVQ0Ad6OEe2h7zg-8Dx1Mz9xfDA2dNyBlpOKgfSJuEf5ve6l8gbChuYRK07qetJZ0yWbaWIFezxEduw74Q7SUhv2GG1HzlRWhPvz7BzGP29MtdpDe3hS1ZTCvuecA6w~qjlARfFEl3UlzrwWZbwVtcc79nq8zwALFwVuPjplRUx39bih2Ou9E9IilmZBc7QPXexzU8aEbAa9YU9h9zwg0WQt9iX2jIiwKTiw__" },
  {
    place: "",
    title: "SCARY",
    title2: "HOUSE",
    description:
      "Step into the eerie world of Stranger Things with the Scary House at Acumen 2025! Inspired by the chilling Creel House and the Upside Down, this event invites you to confront your fears as you navigate haunting corridors and unravel supernatural mysteries. Beware—Vecna might be closer than you think!",
    image: "https://media-hosting.imagekit.io/4b522c158a2b4ebd/8.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DrZt7Yh-BVz9e5Ffpp-9MMP0w8wIJ8EwoXqoXcTjJvH~VIYWiT03Nc9-9PGaOEHYggEOPq71ue~WApGzUwVz0aNwGhgqP6h2eq5HJ-7Z8PWTvFTbIrEBH9rXJXzn8lyIiQ-EzHJZaDUHkv0Qq5LJcsiMT-Ojv3TcI63fXaNTzD8q~75ZoJz1g~~9QtKI4trzGoP3LoWvoqJWC4Q2eunQvmAF0T633LlNXGLTXKrsFKZX468qyABWzuB-SSePtOBkEbGCd-af29WH1RWPSLe7PHOD3GOgSIJdkKSDNvkjWApIqlFZkMHjvUNNlcDl7U8j5Gu9Ingmg-HUHWZO2IGDYg__" },
  {
    place: "",
    title: "MINI",
    title2: "GOLF",
    description:
      "Test your precision and skill with Mini Golf at Acumen 2025! Navigate fun obstacles and creative challenges in a light-hearted game that's perfect for everyone. Prepare to take your shot and enjoy the excitement of a friendly rivalry!",
    image: "https://media-hosting.imagekit.io/43e55858252243c4/9.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qOuQZqvdzNNFPlrAZv9TzVsdoiwBgkEVeuzuHWJcdpGJqHx6KJ5Jd2uUEh5C4UldXPhJpJ12~GGPeD-xKA8949Ok~RckhrcqLnbvEjs3KPjzacztkvP59ynZ457q~RRTNUZJ8tf7TxkP0pZOI4MHLAZ5y0TUJZNsAeIo5NqUIZvDvo~MCcvPdude4hH7fbwV~5E3ohrdSGo~gY0T2yy21R0Nt9byh6Vjg4JdKovmgdbhbrZehDydExnJAw6Un4XPcRqnvGLHGz5Sy4Ve7CrHFg~bEiSQehFAiubwYEEr~HpbHPrC4f6a64BMIEiiQfBiJtRgl-kZCGqTlLUvjsaRMA__" },
  {
    place: "",
    title: "EXTRACTION",
    title2: "",
    description:
      "Join us for Extraction: Capture the Flag at Acumen 2025, where you'll navigate high-stakes challenges inspired by the thrilling action of the movie. Strategize and infiltrate to secure the flag, all while evoking the adrenaline of intense chases and daring rescues. Assemble your team and get ready for an unforgettable mission!",
    image: "https://media-hosting.imagekit.io/2e58d0f0b6464f33/10.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cTQQvMiE5hSuQbuWTldvJJ69R~I2n~Ugt5qMSg5qkZLnz4HLZkVavSL-ArcEbJnbLl3WIfKSm5~P2QJwGalk9zCyst2e5TKZpJXHEeoSYKRWAeM4CyAkhbZUVSKL4gi2-JM4XGkcbvwkBVptY~ZFXnZgo-Cckmle058ao77TeNLaBCic~-2uxQtBJz1pIi7e8ckmDgDaWOWzJU5JCIXSuaW40gTtzEwby7p9Wf2ciP7RglO1M9E6pfQET4P5hVKS76IaylaMIc4u0GDnJ64tSX4BieMqANE-hXzeO~uOwhywJbq2X~3cuhtICSqHW1z3tdtWSSow9vumAUw1L4eZIg__" },
  {
    place: "",
    title: "BINARY BOUNTY",
    title2: "HUNT",
    description:
      "Crack the code, chase the clues, and uncover the hidden web! Dive into a thrilling digital puzzle challenge where each decoded clue unlocks the next level. Think fast, solve smart, and race to be the ultimate bounty hunter at Acumen 2025!",
    image: "https://media-hosting.imagekit.io/4246d5f94938424b/11.jpg?Expires=1838302919&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BIKzg91o7MSq74L3rs-UXk3WYuD0JcpoiNDVP9ZUu~ld2OEMekNI5H7a2Dx9vr7Uk8XDM8DoYQlH3leEP8UAeJkdFLE7Cs86YvTD5YMWScPpbJTXm4~U-kar-yY4p0BFbBm2rYeGHcN0BqDXsNHUrX~VCLkpChd7ek0rEpVmiQcSQmuW5R~bghGzxJgBX10euQCi5c6b2~zAj0eYyTT-Xk3~xSb59Rb5Z9aPxMmRO44jz6zv1VTYorIdPEe6gUcoJcCWCWIPHDyLXhPsrpNZj~CwY1FgeZDj9wdwp4oBMOakfkUDtcEsfHqHdgHjE24pxmiDC7IplWFQFi-4nGAcyw__" },
  {
    place: "",
    title: "PIXEL",
    title2: "ART",
    description:
      "Bring pixel art to life—on canvas! Using grids, paints, and brushes, create stunning pixelated designs by hand. Whether you're a beginner or an artist, this event challenges you to blend digital aesthetics with traditional art.",
    image: "https://media-hosting.imagekit.io/f9ffe8c23ddc438d/12.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v-yCq9ZunxKTgw8fOXw~HfdEfrNspGX3NjcVLrQ2toqPb1Pcy7VIL1yjZpLFxCL8dQwMepGl1tfj1JAv3D8zibqXkgjNQqYQAtcbk9fGIl1jrlBIf5zoWSUDd8us8g1zC1DlXUiKDVvIJZgnN7~VR7XLUAUfq03Hv-ZjFnz6ZwDygvQNMqIeLeaRwAm9YMWlfQJlJkYwQbnz3l6i3fLigGte9GmqvkHrY1F2RcK2Sehkr929QcHKNyzfh-vi2d9lbKvvsjW27rTDTK8V4r4PpycdLdIUj0-I7ysVj9ed~C0LxIQt3fZiqU35kzGgQH9bmgm8ee2PDz8C~lKrCH-zug__" },
  {
    place: "",
    title: "NERF",
    title2: "TAG",
    description:
      "Dive into the excitement of Nerf Tag at Acumen 2025, where strategy meets skill in a fast-paced foam dart showdown. Channel your competitive edge as you navigate the arena, forming alliances and outsmarting opponents, reminiscent of the intense rivalries seen in Mirzapur. With every move, test your reflexes and teamwork in this thrilling battle for supremacy.",
    image: "https://media-hosting.imagekit.io/937be7645b3a4cd4/13.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U3RcR0tY5JxowdE1jqfbShsIOHjGr81oDYcg-40d5xwdlPCnE4Jw23jCJN52UENvMonI7pfvkrcUdtx3w1QdSFzcjzTgq-yHULwYGgvTFy6iuMyNLgAFMyNB3Ek-zF05Oqjs6plah5LLgt4vBnqbPfGHxGW~PMNL-lBJ0s2EMZ71sNZEuJxtUa9xlUmI8RmqtDHA-bV9nT1FIdOcWPigF3PDa-QEKGZFDfSJX9m-X9WW6YMwbu9ygHHlFl888mJOHl0H5lhO64yXwr3WwgAtT3LeX8Ix94YrHfndAucUfL-TZ5SveFpHEc5gffzgVkYFngPeN0sCqtz2ozQ7Fuz6tw__" },
  {
    place: "",
    title: "GEOGUESSR",
    title2: "",
    description:
      "Embark on a thrilling virtual adventure with GeoGuessr at Acumen 2025! Test your geographical knowledge and detective skills as you navigate through random locations on Google Street View, guessing where you are in the world. Compete against friends and fellow explorers to score points based on accuracy and speed. Let's see how far your intuition and observation can take you!",
    image: "https://media-hosting.imagekit.io/187ac3f8237742e5/17.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ujdYDIIIOi7GZ2CIIcUt83dyKkNmAgwqT5LE7K2Vz7GN0N34HXzFgORoIfQuztY3xZy1NrcU7NJxGzhmnh-xLyyFqQhJdnO0UihWJBgm5t89nONd0p4zrHBTqH5LWhaos0sCjc0gzUMDEvlyZXGb6UFXlXlxgA8uilfIDeP5k2yukbItToXUgs0z1q3GFHT8mbtLVfzjDtdNh5WADbghoa88vaT6cuSAYDrFvrGceUwjiL1BEZht-Om~kZb81OBsn9Rx7X2vsgqIJ~0wGrooUHSI3msBKhEkZehlSS4fB2eOJURg409hgTUwdlJ1faYKpnKMjRx042PoAO0l9QyR3Q__" },
  {
    place: "",
    title: "WHISPER",
    title2: "CHALLENGE",
    description:
      "Can you guess what's being said without hearing a word? Put on the headset, watch the actions, and decode the message! A game of expressions, lip-reading, and loads of laughter—get ready for the ultimate fun at Acumen 2025!",
      image : "https://media-hosting.imagekit.io/7814751e60ed4f7a/16.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZDxP4yYklG~A6TbuDx30SYXAXsX2gBbK8lR~q308YfGpGYuGcbdaAoy-KanzXXYwpyIvTIH0yF~ll~3lZN6FVWQPC~ZzO4ChZtxPPKb07FLIfWa7CsS9QO7UJSP6pj~iMAhOgiEPmuZslqNJg8LccZDsEr1ki2PB8VxAbSa83xdXJJgZgc8hPzQz6M5vRoEtDhF~3MjZGiVXIEuI~e-uwJdc3CJjavWP51Gu3cymH2KDHC-VfbXwq-JFZO5WadR6uzEno-v4LbCdSLNAcxIbt0-yk2dZOFztv~P5ytpDfwL-W2ivfKw9I-KtRLGaTPqCbroaspKPMSvc7pSWnH-jwg__" },
  {
    place: "",
    title: "THE AGENT'S",
    title2: "TALE",
    description:
      "A crime. Cryptic clues. Dark secrets. Can you be the agent who pieces it all together? Follow the evidence, decipher the riddles, and uncover the truth before time slips away. But beware—each step brings new dangers, and the truth may be more sinister than it seems. Will you crack the case before it’s too late? ⏳🔦",
      image : "https://media-hosting.imagekit.io/1ee6bcbb46ee4712/14.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ksMVCPgt~VQtvpSTrBFnhxLIWXy9BUuPvPPCeRcmLdefutN~b7IHbJnorSxpguCEMx~LdoDrDWD8bZZH-YojwPu09J9XZpowYpqliLCLHkjydGNtAcwoTcKES9xoxtmzoSzRhAjMoxC5EgTR4Sdean6w3NHfi-Ab0t0DgXEqxMGoeOJOThjCnxY6VrtsmWUzNHeNVyUa26Gc~f2QxHlzPYcil63NKYlCWDdo0~BIKNGGKakGW8jqPiyffqpVmrxXNQ5ZEQzjQ12BNHV7A~Xo4sqhh4xmUwy9mb9OFVNMYE1Ds1Z550yP4xzoFJferl6IzEkXOE4NQJV04et5Uq7H1w__" },
 {
    place: "",
    title: "VR",
    title2: "ZONE",
    description:
      "Step into the future of gaming! Immerse yourself in a thrilling virtual world where action, adventure, and excitement know no bounds. Put on the VR headset, dive into the experience, and enjoy gaming like never before at Acumen 2025!",
      image : "https://media-hosting.imagekit.io/571a5c5d5b5e489b/15.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Nc3oRMCKyzpIjgD1kwoGMfp83VYpSmLdzMMRIeReUR3XzMbZjUsPcXQtsIS~kfauqXWTL2LPpEbzDQ~UYB-V7Yb34gKDS6n6SjtcfsCT5KdcLcxfUkkCcgPiLOKbME6IwjApUyjKmFkoUQN0DQEYqMIvS49zcbBOPawGUxUPmGFKR6AP0syRRGR9xXw6f4rjdLYh4NCJ2qw~KzYzpgizXPjyu06ZDCXef7WjhMLSIHcFJpMHt7m3HaVjpnjBQPeDL3UQ87Hjb8zOL3c0Sy2n0psT619Rq8juhwolhm~o-fgVcXv9-VY~JW7ex4aMlpwuI0jUOYLU-B7p2NCFRJR6zQ__" },
 {
    place: "",
    title: "CONSOLE",
    title2: "CONVERGENCE",
    description:
      "Gear up, grab the controller, and dive into the ultimate PlayStation 5 gaming experience! Whether it's fierce battles, high-speed races, or thrilling adventures, challenge your skills and enjoy non-stop action at Acumen 2025!",
      image : "https://media-hosting.imagekit.io/3f8e8310e34f46a7/18.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JscnFINJ4ELBUBSOZ21~1gZnewz4I5c5RvdBfPknDlgimaELm1nyweN0W2-Yl03K2Pf3FSfiLJnl7pUoVdvcSMpdgLTCDKW4Kvl9T8uBlrZNPh7318Vs8rNmhLxWPpSde9dIrDOOiaTbdvstNsoX~cUqdBhADtb0b5dzNDGAD1I8VxpArjyF1Xm4Ujn-YrL4aI3mwsSD2usJ5LT-Ut8vMfOR3uk1SRNgZbunKWUDlMDUnZLuJ0URDRZcvbkLjVYmvfCiPOOqHSavBxxZw~5sG85iOJnauH7E7b1pVRvak4zPvst7ZJbUbJkAFEszRdfAR2qpOSD9xC~XSky-zglkKg__"  },
  {
    place: "",
    title: "CARNIVAL",
    title2: "GAMES",
    description:
      "Can you guess what's being said without hearing a word? Put on the headset, watch the actions, and decode the message! A game of expressions, lip-reading, and loads of laughter—get ready for the ultimate fun at Acumen 2025!",
      image : "https://media-hosting.imagekit.io/77ccd8d4572d4919/19.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nM~hRRB8NDvJOQWnn4lcNrwl3NK5~JNaX7NdgzkvePgrPzbNfMhreqCnH8H5IJr5m54bdJfrHAw2YPC62TTvPvMefDkcpmcFksJmi~snaBjV3PSbBPGysXUpBJ3wpRvEuiPPSze7nc04OEQDheqvHhr7P1kGLeXUM~-zw3h~FKAYcEXUP5rEQbj9RafLZo15vMwB7Uc4TVtHUyLZgDMBx65cqr3bl3MuGyzekv7lwiWtsXkwpD36rMxIRaZ9YoD2rKzzaVrK8keVbTU94khNdSFATj6FhErpXYjo6SSpbnJO5SxQ47pol3AyowWycvpSaVh4z5-uuumAct-jI7ZpNg__"  },
 {
    place: "",
    title: "DRONE",
    title2: "DOJO",
    description:
      "Can you guess what's being said without hearing a word? Put on the headset, watch the actions, and decode the message! A game of expressions, lip-reading, and loads of laughter—get ready for the ultimate fun at Acumen 2025!",
      image : "https://media-hosting.imagekit.io/b207d593e578474b/20.jpg?Expires=1838302920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=e2DhgBRBGk1JDDuDSFCPaXIaEcj6IqFtGJhXWxit~zpUW6hp5D~n3VbaC-B2BgBU-HKEpl5689c98FVfE-6FFtQcnMJbN44Fq5G7o2~vPMgZMneCMa9E7x8e2b8O5178sIHrb0UbDkmc3esYbYki4SCN73Lkv0n1krGoCdia7UuXB9lypuynllVJUgI4U1B~A8O5-syJDabFWjKzOF8JYJcalZ0xPS9TeynErvFUlUEsZ4Ori3VyrX4CnUJUs9H6IZ6F8PS6D7SdxboJT5zOC3l8aI59pUoXN0RxxBibqbZzeaC~9Ur48E1SMmzGYPUia72N8jqX3DgJ--342BQL1Q__"  },

];
export function TimedCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  let order = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19]);
  let detailsEven = useRef(true);
  let clicks = useRef(0);

  const [offsetTop, setOffsetTop] = useState(200);
  const [offsetLeft, setOffsetLeft] = useState(700);
  const [cardWidth, setCardWidth] = useState(200);
  const [cardHeight, setCardHeight] = useState(300);
  const [gap, setGap] = useState(40);
  const [isMobile, setIsMobile] = useState(false);

  let numberSize = 50;
  const ease = "sine.inOut";

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
        if (clicks.current === 0) {
            step('next');
        }
    },
    onSwipedRight: () => {
        if (clicks.current === 0) {
            step('prev');
        }
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });
  const getCard = (index: number) => `#card${index}`;
  const getCardContent = (index: number) => `#card-content-${index}`;
  const getSliderItem = (index: number) => `#slide-item-${index}`;

  const handleNextCard = () => {
    if (clicks.current === 0) {
        step('next');
    }
};

const handlePrevCard = () => {
    if (clicks.current === 0) {
        step('prev');
    }
};

const step = async (direction: 'next' | 'prev' = 'next') => {
  if (clicks.current > 0) return;
  clicks.current = 1;

  // Handle array manipulation based on direction
  if (direction === 'next') {
      order.current.push(order.current.shift()!);
  } else {
      order.current.unshift(order.current.pop()!);
  }

  detailsEven.current = !detailsEven.current;

  const detailsActive = detailsEven.current ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven.current ? "#details-odd" : "#details-even";

  const [active, ...rest] = order.current;
  const prv = direction === 'next' ? rest[rest.length - 1] : rest[0];

  // Update active card content
  const activeDetails = document.querySelector(detailsActive);
  if (activeDetails) {
      (activeDetails.querySelector(".place-box .text") as HTMLElement).textContent =
          data[active].place;
      (activeDetails.querySelector(".title-1") as HTMLElement).textContent =
          data[active].title;
      (activeDetails.querySelector(".title-2") as HTMLElement).textContent =
          data[active].title2;
      (activeDetails.querySelector(".desc") as HTMLElement).textContent =
          data[active].description;
  }

  // Handle animations
  gsap.set(detailsActive, { zIndex: 22 });
  gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
  gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease });
  gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
  gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
  gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
  gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, ease });
  gsap.set(detailsInactive, { zIndex: 12 });

  // Card animations
  gsap.set(getCard(prv), { zIndex: 10 });
  gsap.set(getCard(active), { zIndex: 20 });

  // Mobile-specific animations
  if (isMobile) {
      gsap.to(getCard(active), {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0,
          ease,
          duration: 0.5,
      });
  } else {
      gsap.to(getCard(prv), { scale: 1.5, ease });
  }

  gsap.to(getCardContent(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
  });

  // Update slider and progress
  gsap.to(getSliderItem(active), { x: 0, ease });
  gsap.to(getSliderItem(prv), { x: -numberSize, ease });
  gsap.to(".progress-sub-foreground", {
      width: isMobile ? 
          200 * (1 / order.current.length) * (active + 1) : 
          500 * (1 / order.current.length) * (active + 1),
      ease,
  });

  // Main card animation
  gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
          const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
          
          // Reset previous card
          gsap.set(getCard(prv), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              zIndex: 30,
              borderRadius: 10,
              scale: 1,
          });

          gsap.set(getCardContent(prv), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
          });

          gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

          // Reset inactive details
          gsap.set(detailsInactive, { opacity: 0 });
          gsap.set(`${detailsInactive} .text`, { y: 100 });
          gsap.set(`${detailsInactive} .title-1`, { y: 100 });
          gsap.set(`${detailsInactive} .title-2`, { y: 100 });
          gsap.set(`${detailsInactive} .desc`, { y: 50 });
          gsap.set(`${detailsInactive} .cta`, { y: 60 });

          // Reset click counter
          clicks.current = 0;
      },
  });

  // Animate remaining cards
  rest.forEach((i, index) => {
      if (i !== prv) {
          const xNew = offsetLeft + index * (cardWidth + gap);
          const delay = 0.1 * (direction === 'next' ? index + 1 : rest.length - index);

          gsap.set(getCard(i), { zIndex: 30 });
          gsap.to(getCard(i), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              ease,
              delay,
          });

          gsap.to(getCardContent(i), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
              ease,
              delay,
          });

          gsap.to(getSliderItem(i), {
              x: (index + 1) * numberSize,
              ease,
              delay,
          });
      }
  });
};
  const init = () => {
    const { innerHeight: height, innerWidth: width } = window;
    const mobile = width < 768;
    setIsMobile(mobile);

    const newOffsetTop = mobile ? height - 280 : height - 430;
    const newOffsetLeft = mobile ? width - 330 : width - 830;
    const newCardWidth = mobile ? 150 : 450;
    const newCardHeight = mobile ? 200 : 250;
    const newGap = mobile ? 20 : 40;

    setOffsetTop(newOffsetTop);
    setOffsetLeft(newOffsetLeft);
    setCardWidth(newCardWidth);
    setCardHeight(newCardHeight);
    setGap(newGap);

    const [active, ...rest] = order.current;
    const detailsActive = detailsEven.current ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven.current ? "#details-odd" : "#details-even";

    gsap.set("#pagination", {
      top: newOffsetTop + (mobile ? 230 : 330),
      left: mobile ? 20 : newOffsetLeft,
      y: 200,
      opacity: 0,
      zIndex: 60,
    });
    gsap.set("nav", { y: -200, opacity: 0 });

    gsap.set(getCard(active), {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive, { 
      opacity: 0, 
      zIndex: 22, 
      x: -200,
      ...(mobile && { 
        left: '20px',
        right: '20px',
        width: 'auto'
      })
    });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
    gsap.set(`${detailsInactive} .text`, { y: 100 });
    gsap.set(`${detailsInactive} .title-1`, { y: 100 });
    gsap.set(`${detailsInactive} .title-2`, { y: 100 });
    gsap.set(`${detailsInactive} .desc`, { y: 50 });
    gsap.set(`${detailsInactive} .cta`, { y: 60 });

    gsap.set(".progress-sub-foreground", {
      width: mobile ? 200 * (1 / order.current.length) * (active + 1) : 500 * (1 / order.current.length) * (active + 1),
    });

    rest.forEach((i, index) => {
      gsap.set(getCard(i), {
        x: newOffsetLeft + 400 + index * (newCardWidth + newGap),
        y: newOffsetTop,
        width: newCardWidth,
        height: newCardHeight,
        zIndex: 30,
        borderRadius: 10,
      });
      gsap.set(getCardContent(i), {
        x: newOffsetLeft + 400 + index * (newCardWidth + newGap),
        zIndex: 40,
        y: newOffsetTop + newCardHeight - 100,
      });
      gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
    });

    gsap.set(".indicator", { x: -window.innerWidth });

    const startDelay = 0.6;

    gsap.to(".cover", {
      x: width + 400,
      delay: 0.5,
      ease,
    });

    rest.forEach((i, index) => {
      gsap.to(getCard(i), {
        x: newOffsetLeft + index * (newCardWidth + newGap),
        zIndex: 30,
        delay: 0.05 * index + startDelay,
        ease,
      });
      gsap.to(getCardContent(i), {
        x: newOffsetLeft + index * (newCardWidth + newGap),
        zIndex: 40,
        delay: 0.05 * index + startDelay,
        ease,
      });
    });

    gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
  };

  // Removed duplicate handlePrevCard declaration

  useEffect(() => {
    const loadImages = async () => {
      let loadedCount = 0;
      try {
        await Promise.all(
          data.map(({ image }) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                loadedCount++;
                resolve(true);
              };
              img.onerror = () => {
                console.warn(`Failed to load image: ${image}`);
                resolve(false);
              };
              img.src = image;
            });
          })
        );
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        if (loadedCount > 0) {
          init();
          window.addEventListener('resize', init);
          return () => window.removeEventListener('resize', init);
        }
      }
    };

    loadImages();
  }, []);

  return (
    <div>
    <div className="relative h-screen overflow-hidden bg-[#1a1a1a] text-[#FFFFFFDD]">
        <div className="wrapper" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div className="indicator" />

            <div id="demo" {...swipeHandlers}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        id={`card${index}`}
                        className="card absolute left-0 top-0 transition-transform duration-300"
                        style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: index === order.current[0] ? '100%' : cardWidth,
                            height: index === order.current[0] ? '100%' : cardHeight,
                            transform: `translate(${index === order.current[0] ? 0 : offsetLeft + index * (cardWidth + gap)}px, ${index === order.current[0] ? 0 : offsetTop}px)`,
                            zIndex: index === order.current[0] ? 20 : 30,
                            borderRadius: index === order.current[0] ? 0 : '10px',
                        }}
                    />
                ))}
          {data.map((item, index) => (
            <div key={index} id={`card-content-${index}`} className="card-content absolute left-0 top-0 pl-4">
              <div className="content-start w-[30px] h-[5px] rounded-full bg-[#FFFFFFDD]" />
              <div className="content-place mt-1.5 text-sm font-medium">{item.place}</div>
              <div className="content-title-1 font-oswald text-xl font-semibold">{item.title}</div>
              <div className="content-title-2 font-oswald text-xl font-semibold">{item.title2}</div>
            </div>
          ))}
        </div>
<div id = "details-des" className="details hidden md:block">
        <div id="details-even" className="details">
          <div className="place-box h-[46px] overflow-hidden">
            <div className="text pt-4 text-xl relative before:absolute before:top-0 before:left-0 before:w-[30px] before:h-1 before:rounded-full before:bg-white">
              {data[0].place}
            </div>
          </div>
          <div className="title-box-1 mt-0.5 h-[100px] overflow-hidden">
            <div className="title-1 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title}</div>
          </div>
          <div className="title-box-2 mt-0.5 h-[100px] overflow-hidden">
            <div className="title-2 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title2}</div>
          </div>
          <div className="desc mt-4 md:w-[500px] w-full text-sm md:text-base font-extrabold text-gray-900 dark:text-gray-100">
  {data[0].description}
</div>

          <div className="cta mt-6 flex items-center md:w-[500px] w-full">
            
            <button className="discover ml-4 px-6 h-9 rounded-full border border-white bg-transparent text-white text-xs uppercase">
              Register
            </button>
          </div>
        </div>
        
        <div id="details-odd" className="details sm:hidden md:block">
  <div className="place-box h-[46px] overflow-hidden">
    <div className="text pt-4 text-xl relative before:absolute before:top-0 before:left-0 before:w-[30px] before:h-1 before:rounded-full before:bg-white">
      {data[0].place}
    </div>
  </div>
  
  <div className="title-box-1 mt-0.5 h-[100px] overflow-hidden">
    <div className="title-1 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title}</div>
  </div>
  <div className="title-box-2 mt-0.5 h-[100px] overflow-hidden">
    <div className="title-2 font-oswald md:text-[72px] text-[42px] font-semibold">{data[0].title2}</div>
  </div>
  <div className="desc mt-4 md:w-[500px] w-full text-sm md:text-base font-extrabold text-gray-900 dark:text-gray-100">
  {data[0].description}
</div>

  <div className="cta mt-6 flex items-center md:w-[500px] w-full">
    <button className="discover ml-4 px-6 h-9 rounded-full border border-white bg-transparent text-white text-xs uppercase">
      Register
    </button>
  </div>
</div>
</div>

        <div id="pagination" className="absolute left-0 top-0 inline-flex">
          <div
            className="arrow arrow-left grid place-items-center w-[50px] h-[50px] rounded-full border-2 border-[#ffffff55] z-[60] cursor-pointer"
            onClick={handlePrevCard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 stroke-2 text-[#ffffff99]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div
            className="arrow arrow-right ml-5 grid place-items-center w-[50px] h-[50px] rounded-full border-2 border-[#ffffff55] z-[60] cursor-pointer"
            onClick={handleNextCard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 stroke-2 text-[#ffffff99]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
          <div className="progress-sub-container ml-6 z-[60] md:w-[500px] w-[200px] h-[50px] flex items-center">
            <div className="progress-sub-background md:w-[500px] w-[200px] h-[3px] bg-[#ffffff33]">
              <div className="progress-sub-foreground h-[3px] bg-[#ecad29]" />
            </div>
          </div>
          <div id="slide-numbers" className="slide-numbers w-[50px] h-[50px] overflow-hidden z-[60] relative">
            {data.map((_, index) => (
              <div
                key={index}
                id={`slide-item-${index}`}
                className="item absolute top-0 left-0 w-[50px] h-[50px] grid place-items-center text-white text-3xl font-bold"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="cover absolute left-0 top-0 w-screen h-screen bg-white z-[100]" />
      </div>
    </div>
    </div>
  );
}
