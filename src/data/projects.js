import elbot from '../assets/projects/elbot.png'
import quadcopter from '../assets/projects/quadcopter.png'
import hexacopter from '../assets/projects/hexacopter.png'
import hexacopterBanner from '../assets/project-banners/hexacopter.png'
import darcy from '../assets/projects/darcy.png'
import speedDetection from '../assets/projects/speed-detection.png'
import elbotBanner from '../assets/project-banners/elbot.png'
import roboticArm from '../assets/projects/robotic-arm.png'
import darcyBanner from '../assets/project-banners/darcy.png'
import speedDetectionBanner from '../assets/project-banners/speed-detection.png'
import elbotGallery1 from '../assets/galleries/elbot/1.png'
import elbotGallery2 from '../assets/galleries/elbot/2.png'
import elbotGallery3 from '../assets/galleries/elbot/3.png'
import quadcopterBanner from '../assets/project-banners/quadcopter.png'
import quadcopterGallery1 from '../assets/galleries/quadcopter/1.png'
import quadcopterGallery2 from '../assets/galleries/quadcopter/2.png'
import quadcopterGallery3 from '../assets/galleries/quadcopter/3.png'
import quadcopterGallery4 from '../assets/galleries/quadcopter/4.png'
import roboticArmBanner from '../assets/project-banners/robotic-arm.png'
import roboticArmGallery1 from '../assets/galleries/robotic-arm/1.png'
import roboticArmGallery2 from '../assets/galleries/robotic-arm/2.png'
import roboticArmGallery3 from '../assets/galleries/robotic-arm/3.png'
import roboticArmGallery4 from '../assets/galleries/robotic-arm/4.png'
import roboticArmGallery5 from '../assets/galleries/robotic-arm/5.png'
import speedDetectionGallery1 from '../assets/galleries/speed-detection/1.png'
import speedDetectionGallery2 from '../assets/galleries/speed-detection/2.png'
import speedDetectionGallery3 from '../assets/galleries/speed-detection/3.png'
import hexacopterGallery1 from '../assets/galleries/hexacopter/1.png'
import hexacopterGallery2 from '../assets/galleries/hexacopter/2.png'
import darcyGallery1 from '../assets/galleries/darcy/1.png'
import darcyGallery2 from '../assets/galleries/darcy/2.png'
import darcyGallery3 from '../assets/galleries/darcy/3.png'
import evaGallery1 from '../assets/galleries/eva/1.png'
import evaGallery2 from '../assets/galleries/eva/2.png'
import evaGallery3 from '../assets/galleries/eva/3.png'
import evaGallery4 from '../assets/galleries/eva/4.png'
import evaBanner from '../assets/project-banners/eva.png'
import eva from '../assets/projects/eva.png'


export const projects = [
    {
        slug: 'el-bot',
      
        title: 'EL-Bot',
      
        subtitle: 'Multi-Node AI Assistant Robot',
      
        image: elbot,

        gallery: [
            elbotGallery1,
            elbotGallery2,
            elbotGallery3,
          ],
      
        banner: elbotBanner,

        bannerPosition: 'center 31%',
      
        category: 'Robotics',
      
        description: `
      EL-Bot is a distributed AI assistant robot integrating multiple ESP32 nodes with a Raspberry Pi 5. The platform features a 7-inch animated facial display, 1080p camera based facial recognition, intelligent interaction systems, and an automated medicine dispensing mechanism.
      
      Communication between distributed modules is achieved through ESP-NOW for ultra-low latency ESP32 networking while MQTT provides reliable messaging between the Raspberry Pi and embedded nodes.
      
      The architecture was designed to explore scalable intelligent robotics systems capable of handling perception, interaction, automation, and real-world human assistance tasks simultaneously.
      
      By combining embedded systems, computer vision, wireless communication, and edge AI processing, EL-Bot serves as a research platform for next-generation intelligent robotic assistants.
        `,
      
        members: [
          'Parthiv Roshan',
          'Nandana Shibu',
        ],
      
        tags: [
          'ESP32',
          'Raspberry Pi 5',
          'ESP-NOW',
          'MQTT',
          'Face Recognition',
          'IoT Architecture',
        ],
      },

      {
        slug: 'robotic-arm',
      
        title: 'Robotic Human Arm',
      
        subtitle: 'Gesture-Controlled Bionic Arm',
      
        image: roboticArm,

        gallery: [
            roboticArmGallery1,
            roboticArmGallery2,
            roboticArmGallery3,
            roboticArmGallery4,
            roboticArmGallery5,
          ],
      
        banner: elbotBanner,
      
        banner: roboticArmBanner,

        bannerPosition: 'center 70%',
      
        category: 'Robotics',
      
        description: `
      The Robotic Human Arm is a gesture-controlled robotic manipulation platform
      designed to replicate human hand movements in real time.
      
      The system combines computer vision and embedded control to track hand gestures
      using OpenCV and transmit movement commands to an ESP32-based controller.
      
      Five MG996R high-torque servo motors independently drive each finger,
      allowing precise and responsive finger articulation.
      
      A custom dual-stage power architecture built around XY3606 and XL4015
      buck converters ensures stable operation under varying load conditions.
      
      The entire platform is powered by a 6600mAh lithium battery pack protected
      by a 20A Battery Management System (BMS), enabling safe and portable operation.
      
      The project serves as a foundation for future research in prosthetics,
      teleoperation systems, assistive robotics and human-machine interaction.
        `,
      
        members: [
          'Parthiv Roshan',
          'Nandana Shibu'
        ],
      
        tags: [
          'ESP32',
          'OpenCV',
          'MG996R Servos',
          'XL4015',
          'XY3606',
          'Battery Management System',
          'Gesture Control',
          'Embedded Systems',
          'Robotics',
          'Human-Machine Interaction'
        ]
      },

      {
        slug: 'quadcopter',
      
        title: 'Quadcopter Drone',
      
        subtitle: 'Autonomous Navigation UAV Platform',
      
        image: quadcopter,

        gallery: [
            quadcopterGallery1,
            quadcopterGallery2,
            quadcopterGallery3,
            quadcopterGallery4,
          ],
      
        banner: elbotBanner,
      
        banner: quadcopterBanner,

        bannerPosition: 'center 36%',
      
        category: 'Drone Systems',
      
        description: `
      The Quadcopter Drone is a full-sized carbon fibre unmanned aerial vehicle
      designed for both manual and autonomous flight operations.
      
      The platform is built around a Pixhawk flight controller running ArduPilot,
      providing advanced flight stabilization, mission planning and autonomous
      navigation capabilities.
      
      A NEO-M8N GPS module enables accurate positioning, waypoint navigation and
      GPS-assisted flight modes, allowing the aircraft to perform autonomous missions
      with improved reliability.
      
      The propulsion system utilizes four high-performance brushless motors driven
      through 40A Electronic Speed Controllers (ESCs), ensuring responsive thrust
      control and stable aerial performance.
      
      Pilot control is provided through the FS-I6S transmitter and receiver system,
      supporting both traditional manual flight and autonomous mission execution.
      
      The lightweight carbon fibre frame provides structural rigidity while
      maintaining low overall weight, resulting in improved flight efficiency,
      endurance and maneuverability.
      
      This project serves as a research platform for autonomous aerial systems,
      navigation algorithms and intelligent UAV applications.
        `,
      
        members: [
          'Renju P Pittapillil',
          'V Kausik',
          'Parthiv Roshan',
          'Jijo'
        ],
      
        tags: [
          'Pixhawk',
          'NEO-M8N GPS',
          '40A ESC',
          'FS-I6S',
          'Carbon Fibre',
          'ArduPilot',
          'Autonomous Navigation',
          'Flight Control',
          'UAV Systems',
          'Aerial Robotics'
        ]
      },

      {
        slug: 'darcy',
      
        title: 'Humanoid Robot Darcy',
      
        subtitle: 'Interactive Welcome & Assistance Robot',
      
        image: darcy,

        gallery: [
            darcyGallery1,
            darcyGallery2,
            darcyGallery3,
          ],
      
        banner: darcyBanner,

        bannerPosition: 'center 50%',
      
        category: 'Humanoid Robotics',
      
        description: `
      Humanoid Robot Darcy is an interactive welcome and assistance robot
      developed to explore human-robot interaction, distributed robotic control
      systems and autonomous mobility.
      
      The platform combines expressive humanoid features, functional servo-driven
      hands and motorised wheel-based locomotion to create a versatile robotic
      assistant capable of interacting with users in real-world environments.
      
      At the core of the system is a Raspberry Pi 5 which handles high-level
      processing, decision-making and coordination. Multiple ESP32 nodes are
      distributed throughout the robot and communicate using MQTT messaging,
      ESP-NOW networking, SPI and UART protocols to manage sensors, actuators
      and subsystem control.
      
      The robotic hands are powered using high-torque DS5160 servo motors,
      while a PCA9685 servo controller enables precise multi-channel motion
      control. Mobility is achieved using 12V metal gear motors driven through
      an L298N motor driver module, providing reliable navigation and movement.
      
      The modular architecture allows different subsystems to operate
      independently while remaining synchronized through the distributed
      communication network.
      
      Darcy serves as a research platform for autonomous robotics,
      human-machine interaction, distributed embedded systems and intelligent
      robotic assistants.
        `,
      
        members: [
          'Ajesh J S',
          'Asif Saif S',
          'Thariq T',
          'V Kausik',
          'Parthiv Roshan',
          'Aswin A'
        ],
      
        tags: [
          'Raspberry Pi 5',
          'ESP32',
          'MQTT',
          'ESP-NOW',
          'SPI',
          'UART',
          'DS5160',
          'PCA9685',
          'L298N',
          'Humanoid Robotics',
          'Human-Robot Interaction',
          'Distributed Systems'
        ]
      },

      {
        slug: 'speed-sign-detection',
      
        title: 'Speed Sign Detection & Speed Control System',
      
        subtitle: 'Computer Vision Assisted Autonomous Speed Regulation',
      
        image: speedDetection,

        gallery: [
            speedDetectionGallery1,
            speedDetectionGallery2,
            speedDetectionGallery3,
          ],
      
        banner: speedDetectionBanner,

        bannerPosition: 'center 57%',
      
        category: 'Computer Vision',
      
        description: `
      The Speed Sign Detection & Speed Control System is an intelligent
      computer vision platform developed to automatically recognize road
      speed-limit signs and dynamically regulate vehicle speed in response
      to detected traffic regulations.
      
      The system utilizes a custom-trained YOLOv11n deep learning model
      running on a Raspberry Pi to perform real-time traffic sign detection
      under varying environmental and lighting conditions.
      
      A dedicated dataset was prepared and optimized to improve detection
      accuracy across multiple speed-limit categories, enabling robust
      recognition during live operation.
      
      Detected speed limits are processed by an embedded control layer
      which automatically adjusts vehicle speed to comply with the
      identified traffic regulations.
      
      The project bridges artificial intelligence, computer vision and
      embedded control systems by integrating deep-learning inference
      outputs directly with motor-control logic.
      
      This research platform demonstrates how intelligent perception
      systems can be integrated into autonomous and driver-assistance
      technologies to improve safety, regulatory compliance and
      real-world navigation performance.
        `,
      
        members: [
          'Thariq T',
          'Hanan',
          'Habeeb Muhammed Niyas',
          'Harishiva G S'
        ],
      
        tags: [
          'YOLOv11n',
          'Raspberry Pi',
          'Python',
          'Computer Vision',
          'Traffic Sign Recognition',
          'Deep Learning',
          'Embedded Control',
          'Autonomous Systems',
          'Motor Control',
          'Real-Time Inference'
        ]
      },

      {
        slug: 'hexacopter',
      
        title: 'Hexacopter',
      
        subtitle: 'Heavy Lift Autonomous UAV',
      
        image: hexacopter,

        gallery: [
            hexacopterGallery1,
            hexacopterGallery2,
          ],
      
        banner: hexacopterBanner,
      
        bannerPosition: 'center 80%',
      
        category: 'Drone Systems',
      
        description: `
      Heavy-lift unmanned aerial vehicle designed for advanced payload carrying
      applications and stable autonomous flight operations.
      
      The platform utilizes a six-motor propulsion architecture providing increased
      redundancy, improved stability and higher payload capacity compared to
      traditional quadcopter systems.
      
      The project focuses on flight control integration, autonomous navigation,
      power distribution design and aerial platform reliability for research and
      industrial applications.
        `,
      
        members: [
          'Ajesh J S',
          'Asif Saif S',
          'Parthiv Roshan',
          'V Kausik',
        ],
      
        tags: [
          'Hexacopter',
          'Autonomous Flight',
          'GPS Navigation',
          'Flight Controller',
          'Payload Systems',
          'UAV Design'
        ]
      },
      {
        slug: 'eva-smart-home-security-automation-controller',
      
        title: 'EVA',
      
        subtitle: 'Self-Hosted Smart Home Security & Automation System',
      
        image: eva,

        gallery: [
          evaGallery1,
          evaGallery2,
          evaGallery3,
          evaGallery4,
        ],
      
        banner: evaBanner, 
      
        bannerPosition: 'center 45%',
      
        category: 'IoT & Smart Systems',
      
        description: `
      EVA is a self-hosted home security and automation controller that integrates motion detection, door/window sensors, live camera feeds, and smart device control into a single unified dashboard.
      
      Built on affordable embedded hardware, EVA provides homeowners with real-time monitoring, instant alerts, and complete local control without relying on cloud services or subscription models.
      
      Features:
      - Real-time motion detection with instant mobile alerts
      - Centralized dashboard for smart home device control
      - Live camera feed access from any browser or device
      - Face detection system to distinguish family members from intruders
      - Door and window sensor integration with tamper alerts
      - Fully offline-capable system (no cloud dependency)
      - Automated routines (e.g., lights off on sleep, lock on exit)
      - LPG leakage detection with smart ventilation response system
      
      EVA is designed as a privacy-focused smart home platform, combining security, automation, and emergency response into a single edge-controlled system.
        `,
      
        members: [
          'Kashinath A',
          'Navajyoth Krishnan D',
          'Gouri',
          'Steve Thomas',
        ],
      
        tags: [
          'IoT',
          'ESP32',
          'Home Automation',
          'Computer Vision',
          'Face Recognition',
          'Motion Detection',
          'Smart Security',
          'Edge Computing',
          'Embedded Systems',
          'LPG Gas Detection',
          'Smart Ventilation'
        ],
      }
]