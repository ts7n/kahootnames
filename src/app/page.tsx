'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  const [upsideDown, setUpsideDown] = useState('');
  const [blocks, setBlocks] = useState('');
  const [circled, setCircled] = useState('');
  const [largeBlocky, setLargeBlocky] = useState('');
  const [boldSerif, setBoldSerif] = useState('');
  const [typewriter, setTypewriter] = useState('');

  useEffect(() => {
    // Upside down
    const upsideDownName = name.split('').map((c) => upsideDownMappings[c] || c).reverse().join('');
    setUpsideDown(upsideDownName);

    // Blocks
    const blocksName = name.split('').map((c) => blockMappings[c] || c).join('');
    setBlocks(blocksName);

    // Circled
    const circledName = name.split('').map((c) => circleMappings[c] || c).join('');
    setCircled(circledName);

    // Large Blocky
    const largeBlockyName = name.split('').map((c) => largeBlockyMappings[c] || c).join('');
    setLargeBlocky(largeBlockyName);

    // Bold Serif
    const boldSerifName = name.split('').map((c) => boldSerifMappings[c] || c).join('');
    setBoldSerif(boldSerifName);

    // Typewriter
    const typewriterName = name.split('').map((c) => typewriterMappings[c] || c).join('');
    setTypewriter(typewriterName);
  }, [name]);

  return (
    <div className="w-full lg:w-1/2 lg:scale-125 transition duration-200 border-2 scale-105 border-gray-200 bg-gray-500 rounded-2xl lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:divide-x-2 lg:divide-stone-200 font-display">
        <div className="flex flex-col justify-between p-8">
          <div>
            <img src="/logo.png" className="w-16 h-16 mr-4" />
            <h2 className="mt-1 text-2xl font-semibold underline decoration-violet-800 text-zinc-100">Fancy Kahoot Names</h2>
            <p className="mt-2 max-w-80 font-light text-zinc-300">You choose a name, and this site will give you back a few different versions that use special fonts.</p>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            maxLength={15}
            onChange={(e) => setName(e.target.value.toLowerCase())}
            className="block w-full rounded-md border-0 mt-4 p-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 ring-offset-black sm:text-sm sm:leading-6"
            placeholder="Name (add emoji with fn+e)"
          />
        </div>
        <div className="p-6 w-full">
          <h3 className="text-zinc-100 text-lg font-semibold leading-6">Output</h3>
          <div className="bg-purple-900 border-2 border-gray-300 h-48 p-2 mt-3">
            <pre className="text-gray-300 text-sm">
              {upsideDown || '...'}
              {blocks && `\n${blocks}`}
              {circled && `\n${circled}`}
              {largeBlocky && `\n${largeBlocky}`}
              {boldSerif && `\n${boldSerif}`}
              {typewriter && `\n${typewriter}`}
            </pre>
          </div>
        </div>
      </div>
      <p className="absolute text-sm p-3 text-gray-400/60">Not affiliated with Kahoot! ASA.</p>
    </div>
  )
}

// ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz
const upsideDownMappings: any = {
  'a': 'ɐ',
  'b': 'q',
  'c': 'ɔ',
  'd': 'p',
  'e': 'ǝ',
  'f': 'ɟ',
  'g': 'ƃ',
  'h': 'ɥ',
  'i': 'ı',
  'j': 'ɾ',
  'k': 'ʞ',
  'l': 'l',
  'm': 'ɯ',
  'n': 'u',
  'o': 'o',
  'p': 'd',
  'q': 'b',
  'r': 'ɹ',
  's': 's',
  't': 'ʇ',
  'u': 'n',
  'v': 'ʌ',
  'w': 'ʍ',
  'x': 'x',
  'y': 'ʎ',
  'z': 'z',
  // 'A': '∀',
  // 'B': 'q',
  // 'C': 'Ɔ',
  // 'D': 'p',
  // 'E': 'Ǝ',
  // 'F': 'Ⅎ',
  // 'G': 'פ',
  // 'H': 'H',
  // 'I': 'I',
  // 'J': 'ſ',
  // 'K': 'ʞ',
  // 'L': '˥',
  // 'M': 'W',
  // 'N': 'N',
  // 'O': 'O',
  // 'P': 'Ԁ',
  // 'Q': 'Q',
  // 'R': 'ɹ',
  // 'S': 'S',
  // 'T': '┴',
  // 'U': '∩',
  // 'V': 'Λ',
  // 'W': 'M',
  // 'X': 'X',
  // 'Y': '⅄',
  // 'Z': 'Z',
}

// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅼🅻🅺🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉
const blockMappings: any = {
  'a': '🅰',
  'b': '🅱',
  'c': '🅲',
  'd': '🅳',
  'e': '🅴',
  'f': '🅵',
  'g': '🅶',
  'h': '🅷',
  'i': '🅸',
  'j': '🅹',
  'k': '🅺',
  'l': '🅻',
  'm': '🅼',
  'n': '🅽',
  'o': '🅾',
  'p': '🅿',
  'q': '🆀',
  'r': '🆁',
  's': '🆂',
  't': '🆃',
  'u': '🆄',
  'v': '🆅',
  'w': '🆆',
  'x': '🆇',
  'y': '🆈',
  'z': '🆉',
}

// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ
const circleMappings: any = {
  'a': 'ⓐ',
  'b': 'ⓑ',
  'c': 'ⓒ',
  'd': 'ⓓ',
  'e': 'ⓔ',
  'f': 'ⓕ',
  'g': 'ⓖ',
  'h': 'ⓗ',
  'i': 'ⓘ',
  'j': 'ⓙ',
  'k': 'ⓚ',
  'l': 'ⓛ',
  'm': 'ⓜ',
  'n': 'ⓝ',
  'o': 'ⓞ',
  'p': 'ⓟ',
  'q': 'ⓠ',
  'r': 'ⓡ',
  's': 'ⓢ',
  't': 'ⓣ',
  'u': 'ⓤ',
  'v': 'ⓥ',
  'w': 'ⓦ',
  'x': 'ⓧ',
  'y': 'ⓨ',
  'z': 'ⓩ',
}

// ᗩᗷᑕᗪEᖴGᕼIᒍᗰᒪKᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ
const largeBlockyMappings: any = {
  'a': 'ᗩ',
  'b': 'ᗷ',
  'c': 'ᑕ',
  'd': 'ᗪ',
  'e': 'E',
  'f': 'ᖴ',
  'g': 'G',
  'h': 'ᕼ',
  'i': 'I',
  'j': 'ᒍ',
  'k': 'K',
  'l': 'ᒪ',
  'm': 'ᗰ',
  'n': 'ᑎ',
  'o': 'O',
  'p': 'ᑭ',
  'q': 'ᑫ',
  'r': 'ᖇ',
  's': 'ᔕ',
  't': 'T',
  'u': 'ᑌ',
  'v': 'ᐯ',
  'w': 'ᗯ',
  'x': '᙭',
  'y': 'Y',
  'z': 'ᘔ',
}

// 𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳
const boldSerifMappings: any = {
  'a': '𝐚',
  'b': '𝐛',
  'c': '𝐜',
  'd': '𝐝',
  'e': '𝐞',
  'f': '𝐟',
  'g': '𝐠',
  'h': '𝐡',
  'i': '𝐢',
  'j': '𝐣',
  'k': '𝐤',
  'l': '𝐥',
  'm': '𝐦',
  'n': '𝐧',
  'o': '𝐨',
  'p': '𝐩',
  'q': '𝐪',
  'r': '𝐫',
  's': '𝐬',
  't': '𝐭',
  'u': '𝐮',
  'v': '𝐯',
  'w': '𝐰',
  'x': '𝐱',
  'y': '𝐲',
  'z': '𝐳',
}

// 𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣
const typewriterMappings: any = {
  'a': '𝚊',
  'b': '𝚋',
  'c': '𝚌',
  'd': '𝚍',
  'e': '𝚎',
  'f': '𝚏',
  'g': '𝚐',
  'h': '𝚑',
  'i': '𝚒',
  'j': '𝚓',
  'k': '𝚔',
  'l': '𝚕',
  'm': '𝚖',
  'n': '𝚗',
  'o': '𝚘',
  'p': '𝚙',
  'q': '𝚚',
  'r': '𝚛',
  's': '𝚜',
  't': '𝚝',
  'u': '𝚞',
  'v': '𝚟',
  'w': '𝚠',
  'x': '𝚡',
  'y': '𝚢',
  'z': '𝚣',
}