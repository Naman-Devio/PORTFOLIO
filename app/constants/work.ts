import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2025',
    title: 'Kota MIT College',
    subtitle: 'B.Tech Computer Science',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'EchoWeb Hackathon',
    subtitle: 'Built a 3D e-waste recycling website',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'Telegram Bots',
    subtitle: 'Developed music, management, and OSINT bots',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'YouTube Downloader API',
    subtitle: 'Built audio/video download service with FastAPI',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'FUTURE',
    title: 'Bot & Web Development',
    subtitle: 'Growing my project portfolio',
    position: 'right',
  }
]