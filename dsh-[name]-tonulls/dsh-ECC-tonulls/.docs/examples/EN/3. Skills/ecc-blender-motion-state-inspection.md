# `/ecc-blender-motion-state-inspection`

Helps inspect a character, rig, pose, animation retargeting, ground contact, gaze/movement direction, and motion matching in Blender. A single screenshot is often insufficient; the request should specify which states and indicators to compare.

## Short Request

```text
/ecc-blender-motion-state-inspection Check why the character slides while walking: compare foot poses, ground contact, and rig movement across frames.
```

## Template

```text
/ecc-blender-motion-state-inspection Inspect [character/scene/animation] in [file or collection]. Suspected issue: [pose/retargeting/contact/orientation]. Check frame range [from–to], source rig [description], and target [description]. Provide observable causes and exact frames/objects, not guesses based on a single image.
```

## Step-by-Step Request

```text
/ecc-blender-motion-state-inspection Diagnose [symptom] in scene [file/scene], frame range [frames], character [object], rig [object].
1. Confirm available scene data and inspection method; if Blender/frame states are unavailable, explicitly list the missing information.
2. Trace poses and rig transforms across key frames [specify]; check root motion and character orientation separately.
3. For retargeting, compare bone/axis and scale correspondence between source and target rigs if both are available.
4. Check ground contact from foot movement relative to the surface and neighboring frames; distinguish actual contact from a visual match in one frame.
5. State a verifiable cause and minimal fix options; do not change the scene without explicit instruction.

Format: observations with frame numbers and object names; hypotheses separate from confirmed facts; likely cause; next verification step. Do not claim to have checked an unavailable state.
```
