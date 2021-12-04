# Human Pose Analysis

## Usage

### Process

- [**Download Models**](models/README.md)
- [**API Specs**](API.md)  
- [**JSON and Skeleton Specs**](client/types.ts)

> run.py

    arguments:
      --help                show this help message
      --image               image file
      --video               video file
      --json                write results to json file
      --round               round coordiantes in json outputs
      --minify              minify json output
      --verbose             verbose logging
      --model               model used for predictions
      --skipms              skip time between frames in miliseconds
      --plot                plot output when processing image
      --fov                 field-of-view in degrees
      --batch               process n detected people in parallel
      --maxpeople           limit processing to n people in the scene
      --skeleton            use specific skeleton definition standard
      --augmentations       how many variations of detection to run
      --average             run avarage on augmentation variations
      --suppress            suppress implausible poses
      --minconfidence       minimum detection confidence
      --iou                 iou threshold for overlaps

### Example

> ./run.py --video media/baseball-pitch.mp4 --json baseball-pitch.json --skipms 2000 --verbose true

    options: {'image': None, 'video': 'media/baseball-pitch.mp4', 'json': 'baseball-pitch.json', 'verbose': 1, 'model': 'models/metrabs_mob3l_y4t', 'skipms': 2000, 'plot': 0, 'fov': 55, 'batch': 64, 'maxpeople': -1, 'skeleton': '', 'augmentations': 5, 'average': 1, 'suppress': 1, 'minconfidence': 0.3, 'iou': 0.7}
    tensorflow 2.7.0
    cpu devices: [PhysicalDevice(name='/physical_device:CPU:0', device_type='CPU')]
    gpu devices: [PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
    model loaded: models/metrabs_mob3l_y4t in 27sec
    video loaded: media/baseball-pitch.mp4 frames: 720 resolution: 1080 x 1080
    process frame: 0 timestamp: 0
    process time: 0.192sec
    ...
    video processed: 14 frames in 4.8sec
    results written to: baseball-pitch.json

<br>

### Visualize

> npm run dev  
<https://localhost:8001>

## ToDo

- Video rendering
- Improve camera control
- SMPL to Inverse Kinematics

<br>

## Credits

- [MeTRAbs Absolute 3D Human Pose Estimator](https://github.com/isarandi/metrabs)
