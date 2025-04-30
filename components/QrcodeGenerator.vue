        <template>
            <div>
              <qrcode-vue :value="qrCodeValue" :size="256" />
            </div>
          </template>
          
          <script>
          import { QrcodeVue } from 'vue-qrcode-reader';
          
          export default {
            name: 'QrcodeGenerator',
            components: {
              QrcodeVue
            },
            data() {
              return {
                qrCodeValue: 'http://192.168.43.201:3000' 
              };
            }
          };
          </script>
          
          <style scoped>
          
          </style>
          