export function getTargetKeyframe(keyframes: Keyframe | Keyframe[]): Keyframe {
  return Array.isArray(keyframes) ? keyframes[keyframes.length - 1] : keyframes
}
