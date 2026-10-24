// Paper metadata checked against arXiv on 2026-10-24.
// Venue labels follow the owner; submission does not imply acceptance.
window.siteContent = {
  "publications": [
    {
      "id": "aura",
      "image": "aura.jpg",
      "imageAlt": "AURA streaming interaction architecture with video chunks, user questions, assistant responses, and audio output.",
      "name": "AURA",
      "category": "systems",
      "venue": "arXiv · 2026",
      "status": "preprint",
      "title": "AURA: Always-On Understanding and Real-Time Assistance via Video Streams",
      "authors": "Xudong Lu, Yang Bo, Jinpeng Chen, Shuhan Li, Xintong Guo, Huankang Guan, Fang Liu, Dunyuan Xu, Peiwen Sun, Heyang Sun, Rui Liu, Hongsheng Li",
      "description": "An end-to-end streaming visual interaction framework for continuous observation, real-time question answering, and proactive responses.",
      "detail": "AURA combines streaming context management, a coarse-to-fine data engine, a silent-speech balanced training objective, and an inference framework for long-horizon interaction.",
      "paper": "https://arxiv.org/abs/2604.04184",
      "code": "https://github.com/aurateam2026/AURA",
      "project": null,
      "tags": [
        "Streaming VideoLLM",
        "Proactive interaction"
      ],
      "diagram": [
        "VIDEO STREAM",
        "CONTEXT + VideoLLM",
        "OBSERVE / RESPOND"
      ]
    },
    {
      "id": "phostream",
      "image": "phostream.jpg",
      "imageAlt": "PhoStream data distribution across YouTube Vlog, Phone Tutorial, Phone Record, and EgoBlind.",
      "name": "PhoStream",
      "category": "benchmarks",
      "venue": "ICML 2026",
      "status": "accepted",
      "title": "PhoStream: Benchmarking Real-World Streaming for Omnimodal Assistants in Mobile Scenarios",
      "authors": "Xudong Lu, Huankang Guan, Yang Bo, Jinpeng Chen, Xintong Guo, Shuhan Li, Fang Liu, Peiwen Sun, Xueying Li, Wei Zhang, Xue Yang, Rui Liu, Hongsheng Li",
      "description": "A mobile-centric benchmark for audio-visual understanding and response timing across on-screen and off-screen scenarios.",
      "detail": "PhoStream evaluates open-ended responses with an online inference pipeline. It contains 5,572 QA pairs from 578 videos and probes instant, backward, and forward temporal reasoning.",
      "paper": "https://arxiv.org/abs/2601.22575",
      "code": "https://github.com/Lucky-Lance/PhoStream",
      "project": null,
      "tags": [
        "Omnimodal evaluation",
        "Response timing"
      ],
      "diagram": [
        "VIDEO + AUDIO",
        "ONLINE EVALUATION",
        "WHAT / WHEN"
      ]
    },
    {
      "id": "xstream",
      "image": "xstream.jpg",
      "imageAlt": "X-Stream multi-angle, multi-view, and multi-device video scenarios.",
      "name": "X-Stream",
      "category": "benchmarks",
      "venue": "ECCV 2026",
      "status": "accepted",
      "title": "X-Stream: Exploring MLLMs as Multiplexers for Multi-Stream Understanding",
      "authors": "Peiwen Sun, Xudong Lu, Huadai Liu, Yang Bo, Dongming Wu, Huankang Guan, Minghong Cai, Jinpeng Chen, Xintong Guo, Shuhan Li, Fang Liu, Rui Liu, Xiangyu Yue",
      "description": "A benchmark for continuous reasoning across concurrent video streams, studying MLLMs through the lens of signal multiplexing.",
      "detail": "X-Stream comprises 4,220 QA pairs across 932 videos and 11 subtasks. Its multi-window, multi-view, and multi-device settings require evidence from multiple streams.",
      "paper": "https://arxiv.org/abs/2606.02482",
      "code": null,
      "project": "https://peiwensun2000.github.io/xstream/",
      "tags": [
        "Multi-stream reasoning",
        "Multiplexing"
      ],
      "diagram": [
        "STREAM A / B / C",
        "MULTIPLEXER",
        "CROSS-STREAM QA"
      ]
    },
    {
      "id": "fastbench",
      "image": "fastbench.png",
      "imageAlt": "FastBench dataset construction and vision expert verification pipeline.",
      "name": "FastBench",
      "category": "benchmarks",
      "venue": "ICLR 2027 submission",
      "status": "submission",
      "title": "FastBench: Can Streaming VLMs Perceive High-Dynamic Real-World Streams?",
      "authors": "Yuxuan Hu, Weikang Shi, Yang Bo, Xudong Lu, Xintong Guo, Shuhan Li, Yuyang He, Huankang Guan, Peiwen Sun, Yunqiao Yang, Wenbo Li, Rui Liu, Hongsheng Li",
      "description": "Evaluating high-dynamic perception in real-world streams and adaptive temporal sampling under bounded context budgets.",
      "detail": "FastBench contains 306 QA pairs across eight domains and six capabilities, with annotated evidence intervals. Its ProactiveFrame baseline adapts incoming frame rates and uses a dual-tier sliding window.",
      "paper": "https://arxiv.org/abs/2610.12427",
      "code": "https://github.com/Ashone3/FastBench",
      "project": null,
      "tags": [
        "High-dynamic perception",
        "Adaptive sampling"
      ],
      "diagram": [
        "HIGH-FPS INPUT",
        "ADAPTIVE SAMPLING",
        "TEMPORAL EVIDENCE"
      ]
    }
  ]
};
