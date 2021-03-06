
/*
Code generated with Faust version 2.5.16
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONzitaRev() {
	return "{\"name\":\"zitaRev\",\"version\":\"2.5.16\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"959048\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"author\":\"JOS, Revised by RM\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Example GUI for zita_rev1_stereo (mostly following the Linux zita-rev1 GUI).\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"zitaRev\"},{\"reverbs.lib/name\":\"Faust Reverb Library\"},{\"reverbs.lib/version\":\"0.0\"},{\"routes.lib/name\":\"Faust Signal Routing Library\"},{\"routes.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.0\"}],\"ui\":[{\"type\":\"hgroup\",\"label\":\"Zita_Rev1\",\"meta\":[{\"0\":\"\"},{\"tooltip\":\"~ ZITA REV1 FEEDBACK DELAY NETWORK (FDN) & SCHROEDER  ALLPASS-COMB REVERBERATOR (8x8). See Faust's reverbs.lib for documentation and  references\"}],\"items\":[{\"type\":\"hgroup\",\"label\":\"Input\",\"meta\":[{\"1\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"In Delay\",\"address\":\"/Zita_Rev1/Input/In_Delay\",\"index\":\"262260\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Delay in ms   before reverberation begins\"},{\"unit\":\"ms\"}],\"init\":\"60\",\"min\":\"20\",\"max\":\"100\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"Decay Times in Bands (see tooltips)\",\"meta\":[{\"2\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"LF X\",\"address\":\"/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/LF_X\",\"index\":\"65620\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Crossover frequency (Hz) separating low and middle frequencies\"},{\"unit\":\"Hz\"}],\"init\":\"200\",\"min\":\"50\",\"max\":\"1000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Low RT60\",\"address\":\"/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Low_RT60\",\"index\":\"65612\",\"meta\":[{\"2\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in low-frequency band\"},{\"unit\":\"s\"}],\"init\":\"3\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"Mid RT60\",\"address\":\"/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/Mid_RT60\",\"index\":\"65600\",\"meta\":[{\"3\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"T60 = time (in seconds) to decay 60dB in middle band\"},{\"unit\":\"s\"}],\"init\":\"2\",\"min\":\"1\",\"max\":\"8\",\"step\":\"0.1\"},{\"type\":\"vslider\",\"label\":\"HF Damping\",\"address\":\"/Zita_Rev1/Decay_Times_in_Bands_(see_tooltips)/HF_Damping\",\"index\":\"65608\",\"meta\":[{\"4\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Frequency (Hz) at which the high-frequency T60 is half the middle-band's T60\"},{\"unit\":\"Hz\"}],\"init\":\"6000\",\"min\":\"1500\",\"max\":\"23520\",\"step\":\"1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 1\",\"meta\":[{\"3\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq1 Freq\",\"address\":\"/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Freq\",\"index\":\"65584\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"Hz\"}],\"init\":\"315\",\"min\":\"40\",\"max\":\"2500\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq1 Level\",\"address\":\"/Zita_Rev1/RM_Peaking_Equalizer_1/Eq1_Level\",\"index\":\"65588\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 1\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"RM Peaking Equalizer 2\",\"meta\":[{\"4\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Eq2 Freq\",\"address\":\"/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Freq\",\"index\":\"65576\",\"meta\":[{\"1\":\"\"},{\"scale\":\"log\"},{\"style\":\"knob\"},{\"tooltip\":\"Center-frequency of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"Hz\"}],\"init\":\"1500\",\"min\":\"160\",\"max\":\"10000\",\"step\":\"1\"},{\"type\":\"vslider\",\"label\":\"Eq2 Level\",\"address\":\"/Zita_Rev1/RM_Peaking_Equalizer_2/Eq2_Level\",\"index\":\"65580\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Peak level   in dB of second-order Regalia-Mitra peaking equalizer section 2\"},{\"unit\":\"dB\"}],\"init\":\"0\",\"min\":\"-15\",\"max\":\"15\",\"step\":\"0.1\"}]},{\"type\":\"hgroup\",\"label\":\"Output\",\"meta\":[{\"5\":\"\"}],\"items\":[{\"type\":\"vslider\",\"label\":\"Dry/Wet Mix\",\"address\":\"/Zita_Rev1/Output/Dry/Wet_Mix\",\"index\":\"65552\",\"meta\":[{\"1\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"-1 = dry, 1 = wet\"}],\"init\":\"0\",\"min\":\"-1\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"vslider\",\"label\":\"Level\",\"address\":\"/Zita_Rev1/Output/Level\",\"index\":\"0\",\"meta\":[{\"2\":\"\"},{\"style\":\"knob\"},{\"tooltip\":\"Output scale   factor\"},{\"unit\":\"dB\"}],\"init\":\"-20\",\"min\":\"-70\",\"max\":\"40\",\"step\":\"0.1\"}]}]}]}";
}
function getBase64CodezitaRev() { return "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Y2VwdGlvbiJ9LHsibWF0aHMubGliL25hbWUiOiJGYXVzdCBNYXRoIExpYnJhcnkifSx7Im1hdGhzLmxpYi92ZXJzaW9uIjoiMi4xIn0seyJuYW1lIjoieml0YVJldiJ9LHsicmV2ZXJicy5saWIvbmFtZSI6IkZhdXN0IFJldmVyYiBMaWJyYXJ5In0seyJyZXZlcmJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJyb3V0ZXMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJyb3V0ZXMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMC4wIn1dLCJ1aSI6W3sidHlwZSI6Imhncm91cCIsImxhYmVsIjoiWml0YV9SZXYxIiwibWV0YSI6W3siMCI6IiJ9LHsidG9vbHRpcCI6In4gWklUQSBSRVYxIEZFRURCQUNLIERFTEFZIE5FVFdPUksgKEZETikgJiBTQ0hST0VERVIgIEFMTFBBU1MtQ09NQiBSRVZFUkJFUkFUT1IgKDh4OCkuIFNlZSBGYXVzdCdzIHJldmVyYnMubGliIGZvciBkb2N1bWVudGF0aW9uIGFuZCAgcmVmZXJlbmNlcyJ9XSwiaXRlbXMiOlt7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IklucHV0IiwibWV0YSI6W3siMSI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJJbiBEZWxheSIsImFkZHJlc3MiOiIvWml0YV9SZXYxL0lucHV0L0luX0RlbGF5IiwiaW5kZXgiOiIyNjIyNjAiLCJtZXRhIjpbeyIxIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJEZWxheSBpbiBtcyAgIGJlZm9yZSByZXZlcmJlcmF0aW9uIGJlZ2lucyJ9LHsidW5pdCI6Im1zIn1dLCJpbml0IjoiNjAiLCJtaW4iOiIyMCIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IkRlY2F5IFRpbWVzIGluIEJhbmRzIChzZWUgdG9vbHRpcHMpIiwibWV0YSI6W3siMiI6IiJ9XSwiaXRlbXMiOlt7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJMRiBYIiwiYWRkcmVzcyI6Ii9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTEZfWCIsImluZGV4IjoiNjU2MjAiLCJtZXRhIjpbeyIxIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ3Jvc3NvdmVyIGZyZXF1ZW5jeSAoSHopIHNlcGFyYXRpbmcgbG93IGFuZCBtaWRkbGUgZnJlcXVlbmNpZXMifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjIwMCIsIm1pbiI6IjUwIiwibWF4IjoiMTAwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTG93IFJUNjAiLCJhZGRyZXNzIjoiL1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9Mb3dfUlQ2MCIsImluZGV4IjoiNjU2MTIiLCJtZXRhIjpbeyIyIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiVDYwID0gdGltZSAoaW4gc2Vjb25kcykgdG8gZGVjYXkgNjBkQiBpbiBsb3ctZnJlcXVlbmN5IGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMyIsIm1pbiI6IjEiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6Ik1pZCBSVDYwIiwiYWRkcmVzcyI6Ii9aaXRhX1JldjEvRGVjYXlfVGltZXNfaW5fQmFuZHNfKHNlZV90b29sdGlwcykvTWlkX1JUNjAiLCJpbmRleCI6IjY1NjAwIiwibWV0YSI6W3siMyI6IiJ9LHsic2NhbGUiOiJsb2cifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6IlQ2MCA9IHRpbWUgKGluIHNlY29uZHMpIHRvIGRlY2F5IDYwZEIgaW4gbWlkZGxlIGJhbmQifSx7InVuaXQiOiJzIn1dLCJpbml0IjoiMiIsIm1pbiI6IjEiLCJtYXgiOiI4Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkhGIERhbXBpbmciLCJhZGRyZXNzIjoiL1ppdGFfUmV2MS9EZWNheV9UaW1lc19pbl9CYW5kc18oc2VlX3Rvb2x0aXBzKS9IRl9EYW1waW5nIiwiaW5kZXgiOiI2NTYwOCIsIm1ldGEiOlt7IjQiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJGcmVxdWVuY3kgKEh6KSBhdCB3aGljaCB0aGUgaGlnaC1mcmVxdWVuY3kgVDYwIGlzIGhhbGYgdGhlIG1pZGRsZS1iYW5kJ3MgVDYwIn0seyJ1bml0IjoiSHoifV0sImluaXQiOiI2MDAwIiwibWluIjoiMTUwMCIsIm1heCI6IjIzNTIwIiwic3RlcCI6IjEifV19LHsidHlwZSI6Imhncm91cCIsImxhYmVsIjoiUk0gUGVha2luZyBFcXVhbGl6ZXIgMSIsIm1ldGEiOlt7IjMiOiIifV0sIml0ZW1zIjpbeyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXExIEZyZXEiLCJhZGRyZXNzIjoiL1ppdGFfUmV2MS9STV9QZWFraW5nX0VxdWFsaXplcl8xL0VxMV9GcmVxIiwiaW5kZXgiOiI2NTU4NCIsIm1ldGEiOlt7IjEiOiIifSx7InNjYWxlIjoibG9nIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJDZW50ZXItZnJlcXVlbmN5IG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMSJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiMzE1IiwibWluIjoiNDAiLCJtYXgiOiIyNTAwIiwic3RlcCI6IjEifSx7InR5cGUiOiJ2c2xpZGVyIiwibGFiZWwiOiJFcTEgTGV2ZWwiLCJhZGRyZXNzIjoiL1ppdGFfUmV2MS9STV9QZWFraW5nX0VxdWFsaXplcl8xL0VxMV9MZXZlbCIsImluZGV4IjoiNjU1ODgiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJQZWFrIGxldmVsICAgaW4gZEIgb2Ygc2Vjb25kLW9yZGVyIFJlZ2FsaWEtTWl0cmEgcGVha2luZyBlcXVhbGl6ZXIgc2VjdGlvbiAxIn0seyJ1bml0IjoiZEIifV0sImluaXQiOiIwIiwibWluIjoiLTE1IiwibWF4IjoiMTUiLCJzdGVwIjoiMC4xIn1dfSx7InR5cGUiOiJoZ3JvdXAiLCJsYWJlbCI6IlJNIFBlYWtpbmcgRXF1YWxpemVyIDIiLCJtZXRhIjpbeyI0IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkVxMiBGcmVxIiwiYWRkcmVzcyI6Ii9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMi9FcTJfRnJlcSIsImluZGV4IjoiNjU1NzYiLCJtZXRhIjpbeyIxIjoiIn0seyJzY2FsZSI6ImxvZyJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiQ2VudGVyLWZyZXF1ZW5jeSBvZiBzZWNvbmQtb3JkZXIgUmVnYWxpYS1NaXRyYSBwZWFraW5nIGVxdWFsaXplciBzZWN0aW9uIDIifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjE1MDAiLCJtaW4iOiIxNjAiLCJtYXgiOiIxMDAwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiRXEyIExldmVsIiwiYWRkcmVzcyI6Ii9aaXRhX1JldjEvUk1fUGVha2luZ19FcXVhbGl6ZXJfMi9FcTJfTGV2ZWwiLCJpbmRleCI6IjY1NTgwIiwibWV0YSI6W3siMiI6IiJ9LHsic3R5bGUiOiJrbm9iIn0seyJ0b29sdGlwIjoiUGVhayBsZXZlbCAgIGluIGRCIG9mIHNlY29uZC1vcmRlciBSZWdhbGlhLU1pdHJhIHBlYWtpbmcgZXF1YWxpemVyIHNlY3Rpb24gMiJ9LHsidW5pdCI6ImRCIn1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xNSIsIm1heCI6IjE1Iiwic3RlcCI6IjAuMSJ9XX0seyJ0eXBlIjoiaGdyb3VwIiwibGFiZWwiOiJPdXRwdXQiLCJtZXRhIjpbeyI1IjoiIn1dLCJpdGVtcyI6W3sidHlwZSI6InZzbGlkZXIiLCJsYWJlbCI6IkRyeS9XZXQgTWl4IiwiYWRkcmVzcyI6Ii9aaXRhX1JldjEvT3V0cHV0L0RyeS9XZXRfTWl4IiwiaW5kZXgiOiI2NTU1MiIsIm1ldGEiOlt7IjEiOiIifSx7InN0eWxlIjoia25vYiJ9LHsidG9vbHRpcCI6Ii0xID0gZHJ5LCAxID0gd2V0In1dLCJpbml0IjoiMCIsIm1pbiI6Ii0xIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoidnNsaWRlciIsImxhYmVsIjoiTGV2ZWwiLCJhZGRyZXNzIjoiL1ppdGFfUmV2MS9PdXRwdXQvTGV2ZWwiLCJpbmRleCI6IjAiLCJtZXRhIjpbeyIyIjoiIn0seyJzdHlsZSI6Imtub2IifSx7InRvb2x0aXAiOiJPdXRwdXQgc2NhbGUgICBmYWN0b3IifSx7InVuaXQiOiJkQiJ9XSwiaW5pdCI6Ii0yMCIsIm1pbiI6Ii03MCIsIm1heCI6IjQwIiwic3RlcCI6IjAuMSJ9XX1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class zitaRevNode extends AudioWorkletNode {
    
    constructor(context, options) {
        
        var json_object = JSON.parse(getJSONzitaRev());
        
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = parseInt(json_object.inputs);
        options.numberOfOutputs = parseInt(json_object.outputs);
        options.channelCount = 1;
        
        super(context, 'zitaRev', options);
        
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }
        
        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }
        
        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }
        
        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
            }
        }
        
        this.output_handler = null;
   
        this.json_object = json_object;
        
        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
       
        // Parse UI
        this.parse_ui(this.json_object.ui, this);
        
        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    getJSON()
    {
        return getJSONzitaRev();
    }
    
    setParamValue(path, val)
    {
        //this.port.postMessage({ type:"param", key:path, value:val });
        
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }
    
    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }
    
    // TO REMOVE
    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }
    
    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    getParams()
    {
        return this.inputs_items;
    }
    
    /**
     * Controller
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }
    
    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }
    
    midiMessage(data)
    {
        this.port.postMessage({ type:"midi", data:data });
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }
    
}

// Faust context
var faust = faust || {};

faust.createzitaRev = function(context, callback)
{
    console.log("in creatzitaRev/zitaRev.js")
    // The main global scope
    context.audioWorklet.addModule("./src/pedal-board/pedals/faust-zitaRev-aw-files/zitaRev-processor.js")
    .then(function () {
         callback(new zitaRevNode(context, {}));
    })
    .catch(function(error) { console.log(error); console.log("Faust zitaRev cannot be loaded or compiled"); });
}

