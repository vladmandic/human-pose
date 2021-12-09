import type { Skeleton } from './types';

export const exclude: Array<string> = [
  'lelb_h36m', 'lelb_muco', 'lhip_cmu_panoptic', 'lhip_h36m', 'nose_sailvos', 'relb_h36m', 'relb_muco', 'rhip_cmu_panoptic', 'rhip_h36m', 'htop_h36m', 'htop_muco', 'htop_sailvos', 'pelv', 'pelv_muco', 'pelv_sailvos', 'rfoo_muco', 'rhan_muco', 'lwri_sailvos',
];

export const skeletons: Record<string, Skeleton> = {
  all: { // All the joints that the model was trained on.
    joints: ['lhip', 'rhip', 'bell', 'lkne', 'rkne', 'spin', 'lank', 'rank', 'thor', 'ltoe', 'rtoe', 'neck', 'lcla', 'rcla', 'head', 'lsho', 'rsho', 'lelb', 'relb', 'lwri', 'rwri', 'lhan', 'rhan', 'pelv', 'head_h36m', 'head_muco',
      'head_sailvos', 'htop_h36m', 'htop_muco', 'htop_sailvos', 'lank_cmu_panoptic', 'lank_h36m', 'lank_muco', 'lank_sailvos', 'lcla_muco', 'lear_cmu_panoptic', 'lear_sailvos', 'lelb_cmu_panoptic', 'lelb_h36m', 'lelb_muco',
      'lelb_sailvos', 'leye_cmu_panoptic', 'leye_sailvos', 'lfin_h36m', 'lfoo_h36m', 'lfoo_muco', 'lhan_muco', 'lhan_sailvos', 'lhip_cmu_panoptic', 'lhip_h36m', 'lhip_muco', 'lhip_sailvos', 'lkne_cmu_panoptic', 'lkne_h36m',
      'lkne_muco', 'lkne_sailvos', 'lsho_cmu_panoptic', 'lsho_h36m', 'lsho_muco', 'lsho_sailvos', 'lthu_h36m', 'ltoe_h36m', 'ltoe_muco', 'ltoe_sailvos', 'lwri_cmu_panoptic', 'lwri_h36m', 'lwri_muco', 'lwri_sailvos',
      'neck_cmu_panoptic', 'neck_h36m', 'neck_muco', 'neck_sailvos', 'nose_cmu_panoptic', 'nose_sailvos', 'pelv_cmu_panoptic', 'pelv_h36m', 'pelv_muco', 'pelv_sailvos', 'rank_cmu_panoptic', 'rank_h36m', 'rank_muco',
      'rank_sailvos', 'rcla_muco', 'rear_cmu_panoptic', 'rear_sailvos', 'relb_cmu_panoptic', 'relb_h36m', 'relb_muco', 'relb_sailvos', 'reye_cmu_panoptic', 'reye_sailvos', 'rfin_h36m', 'rfoo_h36m', 'rfoo_muco', 'rhan_muco',
      'rhan_sailvos', 'rhip_cmu_panoptic', 'rhip_h36m', 'rhip_muco', 'rhip_sailvos', 'rkne_cmu_panoptic', 'rkne_h36m', 'rkne_muco', 'rkne_sailvos', 'rsho_cmu_panoptic', 'rsho_h36m', 'rsho_muco', 'rsho_sailvos', 'rthu_h36m',
      'rtoe_h36m', 'rtoe_muco', 'rtoe_sailvos', 'rwri_cmu_panoptic', 'rwri_h36m', 'rwri_muco', 'rwri_sailvos', 'spi2_muco', 'spi4_muco', 'spin_h36m', 'spin_muco', 'spin_sailvos', 'thor_muco'],
    edges: [[0, 3], [0, 23], [1, 4], [1, 23], [2, 5], [2, 23], [3, 6], [4, 7], [5, 8], [6, 9], [7, 10], [8, 11], [11, 12], [11, 13], [11, 14], [12, 15], [13, 16], [15, 17], [16, 18], [17, 19], [18, 20], [19, 21], [20, 22], [24, 27],
      [24, 69], [25, 28], [25, 70], [26, 29], [26, 71], [30, 52], [31, 44], [31, 53], [32, 45], [32, 54], [33, 55], [33, 63], [34, 58], [34, 70], [35, 41], [36, 42], [37, 56], [37, 64], [38, 57], [38, 65], [39, 58], [39, 66], [40, 59],
      [40, 67], [41, 72], [42, 73], [43, 65], [44, 61], [45, 62], [46, 66], [47, 67], [48, 52], [48, 74], [49, 53], [49, 75], [50, 54], [50, 76], [51, 55], [51, 77], [56, 68], [57, 69], [59, 71], [60, 65], [68, 72], [68, 74], [68, 104],
      [69, 105], [69, 118], [70, 82], [70, 117], [71, 107], [71, 120], [72, 89], [73, 90], [74, 96], [75, 97], [75, 118], [76, 98], [76, 119], [77, 99], [77, 120], [78, 100], [79, 92], [79, 101], [80, 93], [80, 102], [81, 103], [81, 111],
      [82, 106], [83, 89], [84, 90], [85, 104], [85, 112], [86, 105], [86, 113], [87, 106], [87, 114], [88, 107], [88, 115], [91, 113], [92, 109], [93, 110], [94, 114], [95, 115], [96, 100], [97, 101], [98, 102], [99, 103], [108, 113],
      [116, 119], [116, 121], [117, 121]],
    suffix: '',
  },
  smpl_24: { // SMPL body model
    joints: ['pelv', 'lhip', 'rhip', 'spi1', 'lkne', 'rkne', 'spi2', 'lank', 'rank', 'spi3', 'ltoe', 'rtoe', 'neck', 'lcla', 'rcla', 'head', 'lsho', 'rsho', 'lelb', 'relb', 'lwri', 'rwri', 'lhan', 'rhan'],
    edges: [[1, 4], [1, 0], [2, 5], [2, 0], [3, 6], [3, 0], [4, 7], [5, 8], [6, 9], [7, 10], [8, 11], [9, 12], [12, 13], [12, 14], [12, 15], [13, 16], [14, 17], [16, 18], [17, 19], [18, 20], [19, 21], [20, 22], [21, 23]],
    suffix: '',
  },
  coco_19: { // COCO joints including pelvis at the midpoint of the hips and neck at the midpoint of the shoulders as in CMU-Panoptic
    joints: ['neck', 'nose', 'pelv', 'lsho', 'lelb', 'lwri', 'lhip', 'lkne', 'lank', 'rsho', 'relb', 'rwri', 'rhip', 'rkne', 'rank', 'leye', 'lear', 'reye', 'rear'],
    edges: [[8, 7], [16, 15], [4, 3], [4, 5], [15, 1], [6, 7], [6, 2], [3, 0], [0, 1], [0, 2], [0, 9], [1, 17], [2, 12], [14, 13], [18, 17], [10, 9], [10, 11], [12, 13]],
    suffix: '_cmu_panoptic',
  },
  h36m_17: { // Most common Human3.6M joint convention
    joints: ['pelv', 'rhip', 'rkne', 'rank', 'lhip', 'lkne', 'lank', 'spin', 'neck', 'head', 'htop', 'lsho', 'lelb', 'lwri', 'rsho', 'relb', 'rwri'],
    edges: [[9, 10], [9, 8], [6, 5], [12, 11], [12, 13], [4, 5], [4, 0], [11, 8], [8, 14], [8, 7], [0, 1], [0, 7], [3, 2], [15, 14], [15, 16], [1, 2]],
    suffix: '_h36m',
  },
  h36m_25: { // Extended Human3.6M joint set
    joints: ['rhip', 'rkne', 'rank', 'rfoo', 'rtoe', 'lhip', 'lkne', 'lank', 'lfoo', 'ltoe', 'spin', 'neck', 'head', 'htop', 'lsho', 'lelb', 'lwri', 'lthu', 'lfin', 'rsho', 'relb', 'rwri', 'rthu', 'rfin'],
    edges: [[12, 13], [12, 11], [7, 8], [7, 6], [15, 14], [15, 16], [18, 16], [8, 9], [5, 6], [14, 11], [17, 16], [11, 19], [11, 10], [2, 3], [2, 1], [20, 19], [20, 21], [23, 21], [3, 4], [0, 1], [22, 21]],
    suffix: '_h36m',
  },
  mpi_inf_3dhp_17: { // MPI-INF-3DHP main joints (same as the MuPoTS joints)
    joints: ['htop', 'neck', 'rsho', 'relb', 'rwri', 'lsho', 'lelb', 'lwri', 'rhip', 'rkne', 'rank', 'lhip', 'lkne', 'lank', 'pelv', 'spin', 'head'],
    edges: [[16, 0], [16, 1], [13, 12], [6, 5], [6, 7], [11, 12], [11, 14], [14, 8], [14, 15], [10, 9], [3, 2], [3, 4], [8, 9], [2, 1], [1, 15], [5, 1]],
    suffix: '_h36m',
  },
  mpi_inf_3dhp_28: { // full MPI-INF-3DHP joint set
    joints: ['thor', 'spi4', 'spi2', 'spin', 'pelv', 'neck', 'head', 'htop', 'lcla', 'lsho', 'lelb', 'lwri', 'lhan', 'rcla', 'rsho', 'relb', 'rwri', 'rhan', 'lhip', 'lkne', 'lank', 'lfoo', 'ltoe', 'rhip', 'rkne', 'rank', 'rfoo', 'rtoe'],
    edges: [[6, 7], [6, 5], [20, 21], [20, 19], [8, 9], [8, 5], [10, 9], [10, 11], [21, 22], [12, 11], [18, 19], [18, 4], [5, 13], [5, 1], [4, 23], [4, 3], [25, 26], [25, 24], [13, 14], [15, 14], [15, 16], [26, 27], [17, 16], [23, 24], [2, 3], [2, 0], [1, 0]],
    suffix: '_muco',
  },
  smpl_head_30: { // SMPL joints plus face keypoints from COCO and the head top from MPI-INF-3DHP // smpl+head_30
    // joints: ['pelv_smpl', 'lhip_smpl', 'rhip_smpl', 'bell_smpl', 'lkne_smpl', 'rkne_smpl', 'spin_smpl', 'lank_smpl', 'rank_smpl', 'thor_smpl', 'ltoe_smpl', 'rtoe_smpl', 'neck_smpl', 'lcla_smpl', 'rcla_smpl',
    //   'head_smpl', 'lsho_smpl', 'rsho_smpl', 'lelb_smpl', 'relb_smpl', 'lwri_smpl', 'rwri_smpl', 'lhan_smpl', 'rhan_smpl', 'htop_mpi_inf_3dhp', 'learcoco', 'leyecoco', 'nosecoco', 'rearcoco', 'reyecoco'],
    joints: ['pelv', 'lhip', 'rhip', 'bell', 'lkne', 'rkne', 'spin', 'lank', 'rank', 'thor', 'ltoe', 'rtoe', 'neck', 'lcla', 'rcla', 'head', 'lsho', 'rsho', 'lelb', 'relb', 'lwri', 'rwri', 'lhan', 'rhan',
      /* mpi_inf_3dhp */ 'htop', /* coco */ 'lear', 'leye', 'nose', 'rear', 'reye'],
    edges: [[1, 4], [1, 0], [2, 5], [2, 0], [3, 6], [3, 0], [4, 7], [5, 8], [6, 9], [7, 10], [8, 11], [9, 12], [12, 13], [12, 14], [12, 15], [13, 16], [14, 17], [16, 18], [17, 19], [18, 20], [19, 21], [20, 22],
      [21, 23], [25, 26], [26, 27], [27, 29], [28, 29], [24, 15], [15, 27]],
    suffix: '',
  },
};
