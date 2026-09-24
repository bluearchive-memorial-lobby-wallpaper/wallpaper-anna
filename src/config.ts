import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-anna",
  slug: "anna",
  title: "Anna",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 20.666667938232422,
    "lines": [
      {
        "id": "ch0320_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "本当に、飾って、\nしまいました……。",
          "ko": "정말로, 걸어, 버렸어요…….",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "……そんな勇気、私には\nないと思っていたのに。",
          "ko": "……그런 용기,\n저는 낼 수 없다고\n생각했는데.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 28.000001907348633,
    "lines": [
      {
        "id": "ch0320_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "先生が、私に……。",
          "ko": "선생님께서, 제게…….",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "……ふふっ、\nそんな表彰コメント、\n初めて聞きました。",
          "ko": "……후훗, 그런 수여문,\n처음 들어봐요.",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_2_3",
        "text": {
          "zh-cn": "",
          "ja": "ありがとうございます、\nこのような賞を\nいただくことができて、\n本当に光栄です。",
          "ko": "감사합니다,\n이런 상을 받을 수 있어서,\n정말로 영광이에요.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 25.33333396911621,
    "lines": [
      {
        "id": "ch0320_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "……もっと、\n自慢話や苦労話が\n出てくるかと\n思ったのですが。",
          "ko": "……좀 더, 자랑거리나\n고생한 일화가\n나올 줄 알았는데요…….",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "今はもう、\n感極まってしまって……\n何がなんだか。",
          "ko": "지금은 그저,\n감격해버려서……\n뭐가 뭔지.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 24.33333396911621,
    "lines": [
      {
        "id": "ch0320_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "ありがとうございます、\n先生。",
          "ko": "고맙습니다, 선생님.",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "こんな日が来るだなんて、\n本当に思っていなくて……。",
          "ko": "이런 날이 올거라고는,\n정말 상상도 못 했는데…….",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_4_3",
        "text": {
          "zh-cn": "",
          "ja": "夢が一気に、全て\n叶ってしまったような……\nそんな気持ちです。",
          "ko": "꿈이 한번에, 전부\n이뤄진 것 같은……\n그런 기분이에요.",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 16.666667938232422,
    "lines": [
      {
        "id": "ch0320_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "これからも、ずっと……",
          "ko": "앞으로도, 계속…….",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "ええ！ずっと……。",
          "ko": "네! 계속…….",
          "en": ""
        }
      },
      {
        "id": "ch0320_memoriallobby_5_3",
        "text": {
          "zh-cn": "",
          "ja": "ふふっ……！",
          "ko": "후훗……!",
          "en": ""
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
